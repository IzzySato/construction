import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({children}) => {
  return (
    <>
    <Head>
      <meta
      name="description"
      content="12 street construction is construction company that concrete, building serives in Lower Mainland area." />
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