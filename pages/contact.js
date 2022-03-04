import styles from '../styles/Contact.module.css';
import Estitame from '../components/Estimate';

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.gridDiv}>
        <img className={styles.image} alt="logo" src="../images/logo_300_300.svg"/>
        <div className={styles.container}>
          <h2>12th street construction</h2>
          <h3>phone number: <span>604-xxx-xxxxx</span></h3>
          <h3>email: <span>xxxx.com</span></h3>
          <p>BC Canada</p>
        </div>
      </div>
      <div className={styles.estimateContainer}>
        <Estitame />
      </div>
    </div>
  )
};

export default Contact;