import styles from '../../styles/Admin.module.css';

const AdminMain = () => {
  return (
    <div className={styles.container}>
      <h1>Admin Page</h1>
      <div>
        <a href='/admin/customerRequest'>Customer Requests</a>
      </div>
    </div>
  )
};

export default AdminMain;