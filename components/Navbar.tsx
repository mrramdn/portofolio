import { Container, Group, Burger, Paper, Transition, rem, ActionIcon, useComputedColorScheme, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const links = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Project', link: '/projects' },
  { label: 'Contact', link: '/contact' },
];

// Custom SVG Icons
const SunIcon = ({ size = 20, color = 'var(--text-secondary)' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2"/>
    <path d="M12 20v2"/>
    <path d="m4.93 4.93 1.41 1.41"/>
    <path d="m17.66 17.66 1.41 1.41"/>
    <path d="M2 12h2"/>
    <path d="M20 12h2"/>
    <path d="m6.34 17.66-1.41 1.41"/>
    <path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);

const MoonIcon = ({ size = 20, color = 'var(--text-secondary)' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure();
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');
  const computedColorScheme = useComputedColorScheme('light');

  useEffect(() => {
    const savedScheme = localStorage.getItem('mantine-color-scheme') as 'light' | 'dark';
    if (savedScheme) {
      setColorScheme(savedScheme);
    }
  }, []);

  const toggleColorScheme = () => {
    const newScheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newScheme);
    localStorage.setItem('mantine-color-scheme', newScheme);
    
    // Apply theme to document body
    document.documentElement.setAttribute('data-mantine-color-scheme', newScheme);
    
    // Force re-render by updating CSS custom properties
    if (newScheme === 'dark') {
      document.body.style.setProperty('--mantine-color-scheme', 'dark');
      document.body.style.backgroundColor = '#1A1B1E';
      document.body.style.color = '#fff';
    } else {
      document.body.style.setProperty('--mantine-color-scheme', 'light');
      document.body.style.backgroundColor = '#f8f9fa';
      document.body.style.color = '#1a1a1a';
    }
  };

  return (
    <Paper 
      shadow="xs" 
      radius={0} 
      p={0} 
      style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        background: 'var(--bg-secondary)',
        borderBottom: `1px solid var(--card-border)`,
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}
    >
      <Container size="lg" style={{ display: 'flex', alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
        <Link 
          href="/" 
          style={{ 
            fontWeight: 700, 
            fontSize: 24, 
            color: '#1976d2', 
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }}
        >
          Rifki Dev
        </Link>
        <Group gap={24} visibleFrom="sm">
          {links.map((item) => (
            <Link 
              key={item.link} 
              href={item.link} 
              className="nav-link"
              style={{ 
                color: 'var(--text-secondary)', 
                fontWeight: 500, 
                textDecoration: 'none', 
                fontSize: 16, 
                transition: 'color 0.3s ease'
              }}
            >
              {item.label}
            </Link>
          ))}
          <ActionIcon
            onClick={toggleColorScheme}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
            style={{ 
              border: 'none', 
              background: 'transparent',
              color: 'var(--text-secondary)',
              transition: 'color 0.3s ease'
            }}
          >
            {computedColorScheme === 'light' ? (
              <MoonIcon size={20} />
            ) : (
              <SunIcon size={20} />
            )}
          </ActionIcon>
        </Group>
        <Group gap={8} hiddenFrom="sm">
          <ActionIcon
            onClick={toggleColorScheme}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
            style={{ 
              border: 'none', 
              background: 'transparent',
              color: 'var(--text-secondary)',
              transition: 'color 0.3s ease'
            }}
          >
            {computedColorScheme === 'light' ? (
              <MoonIcon size={20} />
            ) : (
              <SunIcon size={20} />
            )}
          </ActionIcon>
          <Burger 
            opened={opened} 
            onClick={toggle} 
            size="sm" 
            aria-label="Toggle navigation"
            color="var(--text-secondary)"
          />
        </Group>
      </Container>
      <Transition transition="pop-top-right" duration={200} mounted={opened}>
        {(styles) => (
          <Paper 
            withBorder 
            style={{ 
              ...styles, 
              position: 'absolute', 
              right: 0, 
              left: 0, 
              top: rem(64), 
              zIndex: 99,
              background: 'var(--bg-secondary)',
              borderColor: 'var(--card-border)',
              transition: 'background-color 0.3s ease, border-color 0.3s ease'
            }}
          >
            <Stack gap={0} p="md">
              {links.map((item) => (
                <Link 
                  key={item.link} 
                  href={item.link} 
                  className="nav-link"
                  style={{ 
                    color: 'var(--text-secondary)', 
                    fontWeight: 600, 
                    textDecoration: 'none', 
                    fontSize: 18, 
                    padding: 8,
                    transition: 'color 0.3s ease'
                  }} 
                  onClick={close}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Paper>
        )}
      </Transition>
    </Paper>
  );
} 