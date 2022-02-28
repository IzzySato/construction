import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({children}) => {
  return (
    <>
    <Head>
       <title>12th street construction</title>
     </Head>
     <Nav />
     <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
    </>
  )
};

export default Layout;