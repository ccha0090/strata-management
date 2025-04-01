import Head from 'next/head';
import styles from '../styles/Home.module.css';

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
          <a href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Learn more about our building and community goals.</p>
          </a>

          <a href="/committee" className={styles.card}>
            <h3>Committee &rarr;</h3>
            <p>Meet the Secretary, Treasurer, and Chairperson.</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>Send us maintenance requests or suggestions.</p>
          </a>

          <a href="/events" className={styles.card}>
            <h3>Events &rarr;</h3>
            <p>Stay updated on meetings and community events.</p>
          </a>

          <a href="/maintenance" className={styles.card}>
            <h3>Maintenance &rarr;</h3>
            <p>Track scheduled maintenance or report issues.</p>
          </a>
        </div>
      </main>
    </div>
  );
}