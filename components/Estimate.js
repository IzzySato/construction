import styles from '../styles/Estimate.module.css';

const Estimate = (data) => {

  const sendEmmailClient = async event => {
    event.preventDefault()

    const res = await fetch('/api/request', {
      body: JSON.stringify({
        fName: event.target.fName.value,
        lName: event.target.lName.value,
        email: event.target.email.value,
        tel: event.target.tel.value,
        address: event.target.address.value,
        comments: event.target.comments.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
  }
  
  return (
    <div className={styles.container}>
      <h3 className={styles.estimateTitle}>Estimate Today!</h3>
      <form onSubmit={sendEmmailClient} method="POST">
        <label className={styles.label} htmlFor="fName">First Name:</label><br/>
        <input className={styles.input} id="fName" type="text" placeholder="John" name="fName" required/><br/>
        <label className={styles.label} htmlFor="lName">Last Name:</label><br/>
        <input className={styles.input} id="lName" type="text" placeholder="Doe" name="lName" required/><br/>
        <label className={styles.label} htmlFor="email">Email:</label><br/>
        <input className={styles.input} id="email" type="email" placeholder="example.com" name="email" required/><br/>
        <label className={styles.label} htmlFor="tel">Phone:</label><br/>
        <input className={styles.input} id="tel" type="tel" placeholder="123 123 1234" name="tel" required/><br/>
        <label className={styles.label} htmlFor="address">Address:</label><br/>
        <input className={styles.input} id="address" type="text" placeholder="123 main street Burnaby" name="address" required/><br/>
        <label className={styles.label} htmlFor="comment">Comments:</label><br/>
        <textarea className={styles.input} id="comment" name="comments" ></textarea><br/>
        <button className='btn' id="submitBtn" type="submit">Send</button>
      </form>
    </div>
  )
};

export default Estimate;