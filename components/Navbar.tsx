import { Container, Group, Burger, Paper, Transition, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

const links = [
  { label: 'Beranda', link: '/' },
  { label: 'Tentang', link: '/about' },
  { label: 'Proyek', link: '/projects' },
  { label: 'Kontak', link: '/contact' },
];

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Paper shadow="xs" radius={0} p={0} style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fff' }}>
      <Container size="lg" style={{ display: 'flex', alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 24, color: '#1976d2', textDecoration: 'none' }}>RifkiDev</Link>
        <Group gap={24} visibleFrom="sm">
          {links.map((item) => (
            <Link key={item.link} href={item.link} style={{ color: '#444', fontWeight: 500, textDecoration: 'none', fontSize: 16, transition: 'color .2s' }}>{item.label}</Link>
          ))}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" aria-label="Toggle navigation" />
      </Container>
      <Transition transition="pop-top-right" duration={200} mounted={opened}>
        {(styles) => (
          <Paper withBorder style={{ ...styles, position: 'absolute', right: 0, left: 0, top: rem(64), zIndex: 99 }}>
            <Group direction="column" gap={0} p="md">
              {links.map((item) => (
                <Link key={item.link} href={item.link} style={{ color: '#1976d2', fontWeight: 600, textDecoration: 'none', fontSize: 18, padding: 8 }} onClick={close}>{item.label}</Link>
              ))}
            </Group>
          </Paper>
        )}
      </Transition>
    </Paper>
  );
} 