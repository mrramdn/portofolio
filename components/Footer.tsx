import { Container, Text } from '@mantine/core';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #eee', marginTop: 40, padding: '24px 0', background: '#fafbfc' }}>
      <Container size="lg" style={{ textAlign: 'center' }}>
        <Text size="sm" c="dimmed">&copy; {new Date().getFullYear()} Rifki. All rights reserved.</Text>
      </Container>
    </footer>
  );
} 