import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
} 