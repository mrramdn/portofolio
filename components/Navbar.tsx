import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
      <Link href="/">Beranda</Link> |{' '}
      <Link href="/about">Tentang</Link> |{' '}
      <Link href="/projects">Proyek</Link> |{' '}
      <Link href="/contact">Kontak</Link>
    </nav>
  );
} 