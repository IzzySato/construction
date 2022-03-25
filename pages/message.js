import styles from '../styles/Message.module.css';
import { useRouter } from 'next/router';

const Message = () => {
const data = useRouter();
const {status, message} = data.query;
  return (
    <div className={status === 'success' ? `${styles.msgDiv} ${styles.success}` : `${styles.msgDiv}  ${styles.error}`}>
      <img className={styles.logo} src="../images/logo_w.svg" alt="logo"/>
      <div>
        <h1 className={styles.msg}>{message}</h1>
        <a className="btn" href="/">Back</a>
      </div>
    </div>
  )
};

export default Message;