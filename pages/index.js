import styles from '../styles/Home.module.css';
import { sanityClient,  urlFor } from '../sanity';
import Link from 'next/link';

const Home = ({projects}) => {
  return (
   <div className={styles.wrapper}>
     <div className={styles.bannerDiv}>
       {  projects && 
           projects.map ((project, index) => 
            <div key={index}>
              {
                (project.mainImgDisplayLanding) ? 
                <div className={styles.mainImage} style={{ backgroundImage:`url(${urlFor(project.mainImage)})`}}></div>
                : ""
              }
            </div>)
       }
       <div className={styles.bannerMsgDiv}>
         <h1>12th Street Construction</h1>
         <Link href='/contact'><p className={styles.estimateBtn} >Request an Estimate Today!</p></Link>
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
                  <a href={`/project/${project.slug.current}`}>
                    <p className={styles.proTitle}>{project.title}</p>
                    <div className={styles.projectImages} style={{ backgroundImage:`url(${urlFor(project.mainImage)})`}}></div>
                  </a>
                }
              </div>
      )}
      </div>
     </div>
     
   </div>
  )
};

export const getServerSideProps = async (pageContext) => {
  const query = `*[_type == "project"] {
    mainImage,
    mainImgDisplayLanding,
    slug,
    title
  }`
  const projects = await sanityClient.fetch(query);

  if (!projects) {
    return {
      props: null,
      notFound: true
    }
  } else {
    return {
      props: {
        projects
      }
    }
  }
};

export default Home;