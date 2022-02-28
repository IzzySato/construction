import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} alt="logo" src="../images/logo_w_2.svg"/>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href='/'>Home</Link>
        </li>
        <li className={styles.li}>
          <Link href='/about'>About</Link>
        </li>
        <li className={styles.li}>
          <Link href='/contact'>Contact us</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;