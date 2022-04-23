import styles from '../styles/About.module.css';
import { getAboutData } from '../data/about';
import { urlFor } from '../sanity';

const About = ({ aboutData }) => {
  return (
    <div>
      {
        aboutData &&
        aboutData.map((data, index) => 
          <div className={styles.container} key={index}>
            <div className={styles.shape}></div>
            <div className={styles.shape2}></div>
            <div className={styles.titleDiv}>
              <h1 className={`title`}>{data.title}</h1>
              <p className={styles.desc}>{data.desc}</p>
            </div>
            {
            <div className={styles.aboutImg} style={{ backgroundImage:`url(${urlFor(data.aboutImg)})`}}></div>}
          </div>
          )
      }
    </div>
  )
};

export const getServerSideProps = async () => {
  const aboutData = await getAboutData();
  if (!aboutData) {
    return {
      props: null,
      notFound: true
    }
  } else {
    return {
      props: {
        aboutData
      }
    }
  }
};

export default About;

