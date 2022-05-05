import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <Link href="/">
            <a>RecipEase</a>
          </Link>
        </h1>

        <p className={styles.description}>
          Get started by updating the contents of your pantry!
        </p>

        <div className={styles.grid}>
          <Link href="/recipes">
            <a className={styles.card}>
              <h2>Recipes &rarr;</h2>
              <p>Explore the catalogue of recipes.</p>
            </a>
          </Link>

          <Link href="/pantry">
            <a className={styles.card}>
              <h2>Pantry &rarr;</h2>
              <p>View or update your food stores.</p>
            </a>
          </Link>

          <Link href="/planner">
            <a className={styles.card}>
              <h2>Meal Plan &rarr;</h2>
              <p>Plan a week of meals and generate a shopping list.</p>
            </a>
          </Link>

          {/* <Link href="/">
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </Link> */}
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
