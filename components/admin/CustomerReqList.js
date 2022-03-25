import styles from '../../styles/Admin.module.css';
import React, { useState } from 'react';

const CusList = (props) => {
  const { fName, lName, email, address, phone, comment, date } = props.data;
  // const { admin } = props.admin;
  const [estimateDone, setEstimateDone] = useState(false);
  
  return (
    <li key={props.index} className={styles.cusList}>
    <div className={styles.topGrid}>
      <h3 className={styles.cusName}>{fName} {lName}</h3>
        <div className={styles.btnDiv}>
          <a className={`btn ${styles.btn}`} href = {`mailto:${email}`}>
          Reply
          </a>
          <button onClick={() => setEstimateDone(true)} 
                  className={estimateDone ? `btn ${styles.btn} ${styles.estDone}` : `btn ${styles.btn} ${styles.estNotDone}`}>
           {(estimateDone)? 'Estimate Done' : 'Estimate Not Done'}
          </button>
        </div>
    </div>
    <p>Email: {email}</p>
    <p>Address: {address}</p>
    <p>Phone: {phone}</p>
    <p>comments: {comment}</p>
    <p className={styles.time}>time: {date}</p>
</li>
  )
}

export default CusList;