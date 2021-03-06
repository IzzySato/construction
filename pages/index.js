import styles from '../styles/Home.module.css';
import { urlFor } from '../sanity';
import Link from 'next/link';
import Estimate from '../components/Estimate';
import { getAllProjects } from '../data/project';
import { getHomeData } from '../data/home';


const Home = ({projects, homeData}) => {
  return (
   <div className={styles.wrapper}>
     <div className={styles.bannerDiv}>
       {  homeData && 
           homeData.map ((data, index) => 
            <div key={index}>
              {
              <div className={styles.mainImage}
                   style={{ backgroundImage:`url(${urlFor(data.mainImg)})`}}>
              </div>
              }
            </div>)
       }
       <div className={styles.bannerMsgDiv}>
         <div className={styles.over}></div>
         <div className={styles.titleDiv}>
          <img className={styles.logo} src="../images/logo_300_300.svg" alt="logo"/>
          <div className={styles.titleTextDiv}>
            <h1 className={`title ${styles.title}`}>12th Street Construction</h1>
            <Link href='/contact'><p className={`btn ${styles.estimateBtn}`} >Request an Estimate Today!</p></Link>
          </div>
         </div>
       </div>
     </div>
     <div className={styles.ourProjDiv}>
      <h2>Our Projects</h2>
      <hr/>
      <div className={styles.projectGrid}>
      {  projects && 
           projects.map ((project, index)=>
              <div className={styles.proDiv}  key={index}>
                {
                  <a aria-label={project.title} className={styles.proA} href={`/project/${project.slug.current}`}>
                    <div className={styles.mainDiv}>
                      <div className={styles.projectImages} style={{ backgroundImage:`url(${urlFor(project.mainImage)})`}}>
                        <p className={styles.proTitle}>{project.title}</p>
                      </div>
                    </div>
                    
                  </a>
                }
              </div>
      )}
      </div>
     </div>
     <div className={styles.estimateDiv}>
      <Estimate />
     </div>
   </div>
  )
};

export const getServerSideProps = async () => {
  const projects = await getAllProjects();
  const homeData = await getHomeData();
  if (!projects && !homeData) {
    return {
      props: null,
      notFound: true
    }
  } else {
    return {
      props: {
        projects,
        homeData
      }
    }
  }
};

export default Home;