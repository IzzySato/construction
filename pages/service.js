import styles from '../styles/Service.module.css';
import { getServiceData } from '../data/service';
import { urlFor } from '../sanity';

const Service = ({service}) => {
  return (
    <div className={styles.container}>
      <h1>Our Services</h1>
      {  service && 
           service.map ((data, index)=>
            <div className={styles.serviceDiv}  key={index}>
              {
              <div className={styles.sDiv}>
                <div className={styles.serviceImages} style={{ backgroundImage:`url(${urlFor(data.serviceImg)})`}}>
                  <p className={styles.serviceTitle}>{data.title}</p>
                </div>
              </div>
              }
            </div>
      )}
    </div>
  )
};

export const getServerSideProps = async () => {
  const service = await getServiceData();
  if (!service) {
    return {
      props: null,
      notFound: true
    }
  } else {
    return {
      props: {
        service
      }
    }
  }
};

export default Service;