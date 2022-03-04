import styles from '../styles/Home.module.css';
import { sanityClient,  urlFor } from '../sanity';
import Link from 'next/link';

const Home = ({projects}) => {
  return (
   <div>
     <div className={styles.bannerDiv}>
       {  projects && 
           projects.map (property => 
            <div key={property._id}>
              {/* <img alt="main image" className={styles.mainImage} src={urlFor(property.mainImage)} />  */}
              {
                (property.mainImgDisplayLanding) ? 
                <div className={styles.mainImage} style={{ backgroundImage:`url(${urlFor(property.mainImage)})`}}></div>
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
      <div className={styles.projectGrid}>
      {  projects && 
            projects.map (property => 
              <div key={property.slug}>
                {/* <img alt="main image" className={styles.mainImage} src={urlFor(property.mainImage)} />  */}
                {
                  <img alt="main image" className={styles.projectImages} src={urlFor(property.mainImage)} /> 
                }
              </div>)
        }
      </div>
     </div>
     
   </div>
  )
};

export const getServerSideProps = async (pageContext) => {
  const query = `*[_type == "project"] {
    mainImage,
    mainImgDisplayLanding
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