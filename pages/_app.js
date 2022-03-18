import Layout from '../components/Layout';
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";


const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <>
    {
      (Component.name === 'CustomerRequest' || Component.name === 'AdminMain') ?
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      :
      <Layout>
        <Component {...pageProps} />
      </Layout>
    }
    </>
  )
};

export default MyApp;
