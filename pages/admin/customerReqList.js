import styles from '../../styles/Admin.module.css';

export const CusList = (customer, session, index) =>
    <li key={index} className={styles.cusList}>
        <div className={styles.topGrid}>
          <h3 className={styles.cusName}>{customer.fName} {customer.lName}</h3>
            { (session.user.group === ['admin']) ? 
            <div className={styles.btnDiv}>
              <button className={`btn ${styles.btn}`}>Replay</button>
              <button className={`btn ${styles.btn}`}>Estimate Done</button>
            </div> : ''
            }

        </div>
        <p>Email: {customer.email}</p>
        <p>Address: {customer.address}</p>
        <p>Phone: {customer.phone}</p>
        <p>comments: {customer.comment}</p>
        <p className={styles.time}>time: {customer.date}</p>
    </li>;