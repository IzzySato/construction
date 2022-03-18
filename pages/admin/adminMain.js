import styles from '../../styles/Admin.module.css';
import { CgGoogle } from "@react-icons/all-files/cg/CgGoogle";
import { useSession, signIn } from "next-auth/react";

const AdminMain = () => {
  const { data: session } = useSession();
  console.log({session});
  return (
    <div className={styles.mainContainer}>
      <img className={styles.logo} src="../images/logo_300_300.svg" alt="logo"/>
      <h1 className={styles.mainTitle}>Welcome to Admin</h1>
      {
      !session &&
        <button onClick={() => signIn()} className={`btn ${styles.googleLoginBtn}`}>
          <CgGoogle className={styles.googleIcon} />
          <div className={styles.google}>Google Login</div>
        </button>
      }
      {
        session &&
        <a className={`btn`} href="/admin/customerRequest">Customer Request</a>
      }
    </div>
  )
};

export default AdminMain;