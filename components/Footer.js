import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <h2>12th street construction</h2>
        <h3>phone number: <span>604-xxx-xxxxx</span></h3>
        <h3>email: <span>xxxx.com</span></h3>
      </div>
    </footer>
  )
};

export default Footer;