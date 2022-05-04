import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RecipEase</title>
      </Head>

      <NavBar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
