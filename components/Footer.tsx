import { Container, Text, Group, useMantineColorScheme } from '@mantine/core';

export default function Footer() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <footer 
      style={{ 
        padding: '40px 0',
        marginTop: 'auto',
        background: 'var(--card-bg)',
        borderTop: `1px solid var(--card-border)`,
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}
    >
      <Container size="lg">
        <Group justify="space-between" align="center">
          <Text 
            size="sm"
            style={{ 
              color: 'var(--text-secondary)',
              transition: 'color 0.3s ease'
            }}
          >
            © 2024 Rifki Dev. All rights reserved.
          </Text>
          <Text 
            size="sm"
            style={{ 
              color: 'var(--text-secondary)',
              transition: 'color 0.3s ease'
            }}
          >
            Built with Next.js & Mantine
          </Text>
        </Group>
      </Container>
    </footer>
  );
} 