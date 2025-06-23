import MainLayout from '../layouts/MainLayout';
import { Title, TextInput, Textarea, Button, Stack, Text } from '@mantine/core';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <MainLayout>
      <Stack maw={500} mx="auto" py={32}>
        <Title order={1} c="blue.7" mb={16}>Kontak</Title>
        <form onSubmit={e => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 2000); }}>
          <Stack gap={12}>
            <TextInput label="Nama" placeholder="Nama" required />
            <TextInput label="Email" type="email" placeholder="Email" required />
            <Textarea label="Pesan" placeholder="Pesan" required minRows={4} />
            <Button type="submit" color="blue" radius="md">Kirim</Button>
            {sent && <Text c="green">Pesan terkirim!</Text>}
          </Stack>
        </form>
        <div style={{ color: '#444', fontSize: 16 }}>
          <b>Email:</b> rifki@email.com<br />
          <b>LinkedIn:</b> <a href="https://linkedin.com/in/rifki" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2' }}>linkedin.com/in/rifki</a><br />
          <b>GitHub:</b> <a href="https://github.com/rifki" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2' }}>github.com/rifki</a>
        </div>
      </Stack>
    </MainLayout>
  );
} 