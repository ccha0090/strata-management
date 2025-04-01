import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  console.log("ENV at build time:", process.env.INFO1111_ASSIGNMENT);
  return {
    props: {}, // Pass any props if needed
  };
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Strata Management</title>
        <meta name="description" content="Managing our apartment building together." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Strata Management</h1>
        <p className={styles.description}>
          Keeping our building clean, safe, and running smoothly 🏢
        </p>
        <div className={styles.grid}>
          <Link href="/about" legacyBehavior>
            <a className={styles.card}>
              <h3>About &rarr;</h3>
              <p>Learn more about our building and community goals.</p>
            </a>
          </Link>

          <Link href="/committee" legacyBehavior>
            <a className={styles.card}>
              <h3>Committee &rarr;</h3>
              <p>Meet the Secretary, Treasurer, and Chairperson.</p>
            </a>
          </Link>

          <Link href="/contact" legacyBehavior>
            <a className={styles.card}>
              <h3>Contact &rarr;</h3>
              <p>Send us maintenance requests or suggestions.</p>
            </a>
          </Link>

          <Link href="/events" legacyBehavior>
            <a className={styles.card}>
              <h3>Events &rarr;</h3>
              <p>Stay updated on meetings and community events.</p>
            </a>
          </Link>

          <Link href="/maintenance" legacyBehavior>
            <a className={styles.card}>
              <h3>Maintenance &rarr;</h3>
              <p>Track scheduled maintenance or report issues.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}