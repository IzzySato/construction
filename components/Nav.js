import styles from '../styles/Nav.module.css';

const Nav = () => {

  return(
    // hamburger menu for mobile
    <nav className={styles.nav}>
      <input type="checkbox" id="checkMenu" className={styles.menu}/>
      <label htmlFor="checkMenu" className={styles.menuIcon}>
        <div className={styles.menuLine}></div>
        <div className={styles.menuLine}></div>
        <div className={styles.menuLine}></div>
      </label>
      {/* menu list */}
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} id="home" href="/" >Home</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} id="about" href="/about" >About us</a>
          </li>
          <li className={styles.li}>
              <a className={styles.a} id="contact" href="/contact" >Contact us</a>
          </li>
        </ul>
    </nav>
  );
};

export default Nav;