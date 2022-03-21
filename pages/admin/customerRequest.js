import styles from '../../styles/Admin.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
        faSearch
      } from "@fortawesome/free-solid-svg-icons";
import { useSession,
         signOut } from "next-auth/react";
import { getAllRequests } from '../../data/request';
import { CusList } from '../../components/admin/CustomerReqList';

const CustomerRequest = ({customerRequests}) => {
  const { data: session } = useSession();
  const date = new Date();
  const today = `${date.getFullYear()}-${((date.getMonth()+1) < 10) ?
    '0'+(date.getMonth()+1)
    : date.getMonth()+1 }-${date.getDate()}`;
  return (
    <>
      {
      session &&
      <div className={styles.reqContainer}>
        <button className={`btn`} onClick={() => signOut()}>Sign out</button>
      <h1 className={styles.reqTitle}>Customer Request</h1>
      <div>
        <input className={styles.search} placeholder="search" />
        <button className={`btn ${styles.searchBtn}`}>
          <FontAwesomeIcon className={styles.searchIcon} icon={faSearch}/>
        </button>
      </div>
      <div className={styles.todayRequest}>
        <h2 className={styles.todayTitle}>Today's Customer Requests</h2><hr/>
        <ul>
        {customerRequests 
        &&
        customerRequests.map((customer, index) =>
           (customer.date === today) ?
            CusList(customer, session, index)
            : ''
        )}
        </ul>
      </div>
      <div>
        <div className={styles.allCusDiv}>
          <h2 className={styles.title}>All Customer Requests</h2><hr/>
          <ul>
          { customerRequests 
              &&
            customerRequests.map((customer, index) =>
            CusList(customer, session, index)
           )}
          </ul>
        </div>
      </div>
    </div>
    }
    </>
  )
};

export const getServerSideProps = async () => {
  const customerRequests = await getAllRequests();
  if (!customerRequests) {
    return {
      props: null,
      notFound: true
    }
  } else {
    return {
      props: {
        customerRequests
      }
    }
  }
};

export default CustomerRequest;