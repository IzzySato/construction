import styles from '../styles/Estimate.module.css';

const Estimate = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.estimateTitle}>Estimate Today!</h3>
      <form>
        <label className={styles.label} htmlFor="name">Name:</label><br/>
        <input className={styles.input} id="name" type="text" placeholder="John Doe" required/><br/>
        <label className={styles.label} htmlFor="email">Email:</label><br/>
        <input className={styles.input} id="email" type="email" placeholder="example.com" required/><br/>
        <label className={styles.label} htmlFor="tel">Phone:</label><br/>
        <input className={styles.input} id="tel" type="tel" placeholder="123 123 1234" required/><br/>
        <label className={styles.label} htmlFor="address">Address:</label><br/>
        <input className={styles.input} id="address" type="text" placeholder="123 main street Burnaby" required/><br/>
        <label className={styles.label} htmlFor="comment">Comments:</label><br/>
        <textarea className={styles.input} id="comment" ></textarea><br/>
        <button className='btn' id="submitBtn" itype="submit">Submit</button>
      </form>
    </div>
  )
};

export default Estimate;