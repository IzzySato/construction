import styles from '../../styles/Admin.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const CustomerRequest = () => {
  return (
    <div className={styles.container}>
      <h1>Customer Request</h1>
      <div>
        <input className={styles.search} placeholder="search" />
        <button className={styles.searchBtn}>
          <FontAwesomeIcon className={styles.searchIcon} icon={faSearch}/>
        </button>
      </div>
      <div className={styles.todayRequet}>
      <h2 className={styles.title}>Today's Customer Requests</h2><hr/>
        <ul>
            <li>
              <div className={styles.cusTopGrid}>
                <h3 className={styles.cusName}>Name: John Doe</h3>
                <div className={styles.btnDiv}>
                  <button className={styles.btn}>Replay</button>
                  <button className={styles.btn}>Estimate Done</button>
                </div>
              </div>
              <p>Email: johndoe@gmail.com</p>
              <p>Address: 1234 main street Vancouver</p>
              <p>Phone: 123 456 7895</p>
            </li>
          </ul>
      </div>
      <div className={styles.allCusDiv}>
        <h2 className={styles.title}>All Customer Requests</h2><hr/>
        <ul className={styles.cusUl}>
          <li>
            <div className={styles.cusTopGrid}>
              <h3 className={styles.cusName}>Name: John Doe</h3>
              <div className={styles.btnDiv}>
                <button className={styles.btn}>Replay</button>
                <button className={styles.btn}>Estimate Done</button>
              </div>
            </div>
            <p>Email: johndoe@gmail.com</p>
            <p>Address: 1234 main street Vancouver</p>
            <p>Phone: 123 456 7895</p>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default CustomerRequest;