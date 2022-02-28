import styles from '../styles/Estimate.module.css';

const Estimate = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.estimateTitle}>Estimate Today!</h3>
      <form>
        <label className={styles.label} htmlFor="name">Name:</label><br/>
        <input className={styles.input} id="name" type="text" required/><br/>
        <label className={styles.label} htmlFor="email">Email:</label><br/>
        <input className={styles.input} id="email" type="email" required/><br/>
        <label className={styles.label} htmlFor="tel">Phone:</label><br/>
        <input className={styles.input} id="tel" type="tel" required/><br/>
        <label className={styles.label} htmlFor="address">Address:</label><br/>
        <input className={styles.input} id="address" type="text" required/><br/>
        <button className='btn' id="submitBtn" itype="submit">Submit</button>
      </form>
    </div>
  )
};

export default Estimate;