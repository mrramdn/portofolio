import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from '@mantine/core';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Container size="lg" style={{ minHeight: '70vh', paddingTop: 32 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
} 