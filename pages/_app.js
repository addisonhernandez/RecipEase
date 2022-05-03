import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RecipEase</title>
      </Head>

      {/* TODO: This can probs be a component */}
      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            <a className='border'>Home{'\t'}</a>
          </Link>

          <Link href="/recipes">
            <a className='border'>Recipes{'\t'}</a>
          </Link>

          <Link href="/pantry">
            <a className='border'>Pantry{'\t'}</a>
          </Link>

          <Link href="/planner">
            <a className='border'>Meal Plan{'\t'}</a>
          </Link>
        </div>
      </div>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
