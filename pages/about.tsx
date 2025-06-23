import MainLayout from '../layouts/MainLayout';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <MainLayout>
      <div className={styles.about}>
        <h1>Tentang Saya</h1>
        <p>Ini adalah halaman tentang saya. Tambahkan deskripsi singkat tentang diri Anda di sini.</p>
      </div>
    </MainLayout>
  );
} 