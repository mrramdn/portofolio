import MainLayout from '../layouts/MainLayout';
import { Title, Text, Button, Avatar, Stack, Group, Paper, List, Timeline, Container, Grid, Divider } from '@mantine/core';
import { motion } from 'framer-motion';

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const awards = [
  { year: '2024', title: 'Juara 1 UI/UX Hackathon', desc: 'Kompetisi nasional desain antarmuka.' },
  { year: '2023', title: 'Best Frontend Developer', desc: 'Penghargaan internal kampus.' },
];

const experiences = [
  { year: '2023 - Sekarang', role: 'Frontend Developer', place: 'PT. Digital Inovasi', desc: 'Membangun aplikasi web modern dengan React & Next.js.' },
  { year: '2022 - 2023', role: 'UI Designer', place: 'Freelance', desc: 'Membuat desain antarmuka untuk startup dan UMKM.' },
];

const timeline = [
  { year: '2021', desc: 'Masuk Universitas Telkom, S1 Informatika' },
  { year: '2022', desc: 'Mulai freelance UI/UX & web development' },
  { year: '2023', desc: 'Magang di PT. Digital Inovasi' },
  { year: '2024', desc: 'Juara 1 UI/UX Hackathon Nasional' },
];

export default function Home() {
  return (
    <MainLayout>
      <Container size="lg" py={60}>
        <Grid gutter={60} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariant}
              custom={0}
            >
              <Title order={1} c="dark.8" style={{ fontSize: 48, marginBottom: 16, fontWeight: 700, lineHeight: 1.2 }}>
                Rifki Maulana
              </Title>
              <Text size="xl" c="gray.6" mb={24} style={{ fontWeight: 500, fontSize: 20 }}>
                Frontend Developer & UI Enthusiast
              </Text>
              <Text maw={500} c="gray.7" mb={32} size="lg" style={{ lineHeight: 1.6 }}>
                Saya adalah seorang pengembang web yang fokus pada pembuatan antarmuka modern, responsif, dan mudah digunakan. Selamat datang di portofolio saya!
              </Text>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  component="a" 
                  href="/projects" 
                  size="lg" 
                  radius="md"
                  style={{ 
                    fontWeight: 600,
                    background: '#1a1a1a',
                    border: 'none',
                    padding: '16px 32px',
                    fontSize: '16px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  Lihat Proyek Saya
                </Button>
              </motion.div>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariant}
              custom={1}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative' }}>
                <Avatar src="/images/profile.jpg" size={240} radius={240} alt="Foto Profil" />
                <div style={{
                  position: 'absolute',
                  top: -8,
                  left: -8,
                  right: -8,
                  bottom: -8,
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #f8f9fa, #e9ecef)',
                  zIndex: -1,
                  opacity: 0.8,
                }} />
              </div>
            </motion.div>
          </Grid.Col>
        </Grid>

        <Divider my={80} label="Tentang Saya" labelPosition="center" labelProps={{ size: 'lg', fw: 600 }} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          custom={2}
        >
          <Text size="xl" c="gray.7" mb={16} style={{ lineHeight: 1.7, textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            Halo! Saya <b>Rifki Maulana</b>, seorang Frontend Developer yang berdomisili di Bandung. Saya memiliki ketertarikan pada desain antarmuka, animasi web, dan pengembangan aplikasi berbasis React/Next.js.
          </Text>
        </motion.div>

        <Divider my={80} label="Awards" labelPosition="center" labelProps={{ size: 'lg', fw: 600 }} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          custom={3}
        >
          <Group gap={32} wrap="wrap" justify="center">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Paper 
                  shadow="sm" 
                  p="xl" 
                  radius="lg" 
                  withBorder 
                  style={{ 
                    minWidth: 280,
                    background: '#fff',
                    border: '1px solid #e9ecef'
                  }}
                >
                  <Text fw={700} c="dark.8" size="lg" mb={8}>{award.year}</Text>
                  <Text fw={600} size="md" mb={8}>{award.title}</Text>
                  <Text c="gray.6" size="sm">{award.desc}</Text>
                </Paper>
              </motion.div>
            ))}
          </Group>
        </motion.div>

        <Divider my={80} label="Experience" labelPosition="center" labelProps={{ size: 'lg', fw: 600 }} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          custom={4}
        >
          <Stack gap={24} maw={800} mx="auto">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Paper 
                  shadow="xs" 
                  p="xl" 
                  radius="lg" 
                  withBorder 
                  style={{ 
                    background: '#fff',
                    border: '1px solid #e9ecef'
                  }}
                >
                  <Group justify="space-between" mb={12}>
                    <Text fw={700} c="dark.8" size="lg">{exp.year}</Text>
                    <Text fw={600} size="md">{exp.role} @ {exp.place}</Text>
                  </Group>
                  <Text c="gray.6" size="sm">{exp.desc}</Text>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </motion.div>

        <Divider my={80} label="Timeline" labelPosition="center" labelProps={{ size: 'lg', fw: 600 }} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          custom={5}
        >
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <Timeline active={timeline.length} bulletSize={24} lineWidth={2} color="dark.6">
              {timeline.map((item, i) => (
                <Timeline.Item key={i} title={item.year}>
                  <Text size="md" c="gray.7">{item.desc}</Text>
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        </motion.div>
      </Container>
    </MainLayout>
  );
}
