import styles from '../styles/Home.module.css';
import { urlFor } from '../sanity';
import Estimate from '../components/Estimate';
import { getAllProjects } from '../data/project';

const Home = ({projects}) => {
  return (
   <div className={styles.wrapper}>
     <div className={styles.ourProjDiv}>
      <h2>Projects</h2>
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