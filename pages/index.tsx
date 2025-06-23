import MainLayout from '../layouts/MainLayout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Selamat Datang di Portofolio Saya</h1>
        <p>Ini adalah website portofolio built with Next.js</p>
      </div>
    </MainLayout>
  );
}
