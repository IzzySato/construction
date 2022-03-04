import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.phoneMenu}>
        <div className={styles.phoneLine}></div>
        <div className={styles.phoneLine}></div>
        <div className={styles.phoneLine}></div>
      </div>
      <img className={styles.logo} alt="logo" src="../images/logo_w_2.svg"/>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href='/'>Home</Link>
          </li>
          <li className={styles.li}>
            <Link href='/about'>About us</Link>
          </li>
          <li className={styles.li}>
            <Link href='/contact'>Contact us</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Nav;