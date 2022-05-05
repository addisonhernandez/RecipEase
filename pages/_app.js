import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RecipEase</title>
        <meta name="description" content="A tool to help build tasty meals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
