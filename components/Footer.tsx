export default function Footer() {
  return (
    <footer style={{ padding: '1rem', borderTop: '1px solid #eee', marginTop: '2rem', textAlign: 'center' }}>
      <small>&copy; {new Date().getFullYear()} Nama Anda. All rights reserved.</small>
    </footer>
  );
} 