import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify-clone 2.0</title>
        <link rel="icon" href="/spotify.png" />
      </Head>
      <h1>This is Spotify-clone 2.0 🔥 </h1>

      <main>
        {/* Sidebar */}
        {/* Center */}
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}
