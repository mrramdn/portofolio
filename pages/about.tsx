import MainLayout from '../layouts/MainLayout';
import { Title, Text, List, Stack } from '@mantine/core';

export default function About() {
  return (
    <MainLayout>
      <Stack gap={24} maw={600} mx="auto" py={32}>
        <Title order={1} c="blue.7">Tentang Saya</Title>
        <Text c="gray.7">
          Halo! Saya <b>Rifki</b>, seorang Frontend Developer yang berdomisili di Bandung. Saya memiliki ketertarikan pada desain antarmuka, animasi web, dan pengembangan aplikasi berbasis React/Next.js.
        </Text>
        <div>
          <Title order={3} c="blue.6" mb={8} style={{ fontSize: 20 }}>Info Pribadi</Title>
          <List spacing="xs" size="md" c="gray.8">
            <List.Item><b>Email:</b> rifki@email.com</List.Item>
            <List.Item><b>Domisili:</b> Bandung, Indonesia</List.Item>
            <List.Item><b>Keahlian:</b> React, Next.js, TypeScript, Framer Motion, UI/UX</List.Item>
          </List>
        </div>
        <div>
          <Title order={3} c="blue.6" mb={8} style={{ fontSize: 20 }}>Pendidikan</Title>
          <List spacing="xs" size="md" c="gray.8">
            <List.Item>Bina Nusantara University - S1 Informatika (2021 - Sekarang)</List.Item>
          </List>
        </div>
      </Stack>
    </MainLayout>
  );
} 