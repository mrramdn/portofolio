import { Box, useMantineColorScheme } from '@mantine/core';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { colorScheme } = useMantineColorScheme();
  useEffect(() => {
    // Set initial theme based on localStorage
    const savedScheme = localStorage.getItem('mantine-color-scheme') as 'light' | 'dark';
    if (savedScheme) {
      document.documentElement.setAttribute('data-mantine-color-scheme', savedScheme);
    }
  }, []);
  return (
    <Box 
      style={{ 
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        transition: 'background-color 0.3s ease'
      }}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
} 