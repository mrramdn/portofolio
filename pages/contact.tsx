import MainLayout from '../layouts/MainLayout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <MainLayout>
      <div className={styles.contact}>
        <h1>Kontak</h1>
        <p>Silakan hubungi saya melalui email: email@domain.com</p>
      </div>
    </MainLayout>
  );
} 