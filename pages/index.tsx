import MainLayout from '../layouts/MainLayout';
import { Title, Text, Button, Group, Avatar, Stack } from '@mantine/core';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <MainLayout>
      <Stack align="center" justify="center" gap={24} style={{ minHeight: '70vh' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Avatar src="/images/profile.jpg" size={120} radius={120} alt="Foto Profil" style={{ marginBottom: 8 }} />
        </motion.div>
        <Title order={1} c="blue.7" style={{ fontSize: 36 }}>Rifki</Title>
        <Text size="lg" c="dimmed">Frontend Developer & UI Enthusiast</Text>
        <Text maw={400} ta="center" c="gray.7">
          Saya adalah seorang pengembang web yang fokus pada pembuatan antarmuka modern, responsif, dan mudah digunakan. Selamat datang di portofolio saya!
        </Text>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button component="a" href="/projects" size="md" color="blue" radius="md" style={{ fontWeight: 500 }}>
            Lihat Proyek Saya
          </Button>
        </motion.div>
      </Stack>
    </MainLayout>
  );
}
