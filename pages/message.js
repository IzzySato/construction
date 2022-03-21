import styles from '../styles/Message.module.css';
import { useRouter } from 'next/router';

const Message = () => {
  let {status, message} = useRouter();
console.log(data.query);
  return (
    <div>
      <div className={`${styles.status} ${styles.msgDiv}`}>
        <p>{message}</p>
        <a href="/">Back</a>
      </div>
    </div>
  )
};

export default Message;