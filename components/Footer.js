import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src="../images/logo_w.svg" alt="logo"/>
      <div className={styles.container}>
        <h1 className={`title ${styles.companyName}`}>12th street construction</h1>
        <h3>phone number: <span>604-xxx-xxxxx</span></h3>
        <h3>email: <span>xxxx.com</span></h3>
      </div>
    </footer>
  )
};

export default Footer;