import { Container, Grid, Text, Title, Card, Stack, Badge, Paper, Box, useComputedColorScheme, Group, Divider } from '@mantine/core';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

const education = [
  { degree: 'Software Engineering', school: 'State Vocational High School 1 Cimahi', year: '2021 - 2024', description: 'Involved in real world case software projects during vocational training, including client-based development and internship tasks. Actively participated in school extracurricular activities and developer communities to enhance teamwork and communication skills.' },
  { degree: 'Bachelor of Computer Science', school: 'Bina Nusantara University', year: '2024 - Present', description: 'Actively engaged in software engineering, algorithms, and system design coursework while contributing to real-world application development. Involved in technical workshops, developer communities, and competitive programming initiatives that extend beyond standard academic requirements. Focus areas include backend architecture, system scalability, and modern web technologies.' }
];

const values = [
  {
    title: 'Continuous Learning',
    desc: 'I believe in lifelong learning and always strive to stay ahead with the latest technologies and best practices.'
  },
  {
    title: 'Collaboration',
    desc: 'Great products are built by great teams. I value open communication and teamwork in every project.'
  },
  {
    title: 'User-Centric Design',
    desc: 'Every line of code should serve the user. I focus on creating intuitive, accessible, and delightful experiences.'
  },
];

const hobbies = [
  { icon: '📷', title: 'Photography', desc: 'Taking aesthetic shots of audio equipment and desk setups combining visual style with technical appreciation.' },
  { icon: '🎧', title: 'Audiophile', desc: 'Exploring high-fidelity sound systems and music production as both a hobby and technical interest.' },
  { icon: '📚', title: 'Reading', desc: 'Exploring books on technology, psychology, phylosophy and personal growth to refine intelligence' },
];

export default function About() {
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <MainLayout>
      <Container size="lg" py={80}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 80 }}
        >
          <Title order={1} size="3rem" mb={30} style={{ textAlign: 'center', color: 'var(--text-primary)', fontWeight: 800 }}>
            About Me
          </Title>
          <Text size="lg" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            I am a passionate Full Stack Developer with a strong foundation in modern web technologies and a keen eye for design. My journey is driven by curiosity, creativity, and a relentless pursuit of excellence. I thrive on solving complex problems and transforming ideas into impactful digital experiences.
          </Text>
        </motion.div>

        {/* Personal Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
          <Title order={2} size="2.2rem" mb={32} style={{ textAlign: 'center', color: 'var(--text-primary)', fontWeight: 700 }}>
            My Values & Principles
          </Title>
          <Grid gutter={30}>
            {values.map((val, idx) => (
              <Grid.Col key={idx} span={{ base: 12, md: 4 }}>
                <Paper shadow="sm" radius="md" p="lg" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                  <Title order={4} style={{ color: '#1976d2', fontWeight: 700, marginBottom: 8 }}>{val.title}</Title>
                  <Text size="sm" style={{ color: 'var(--text-secondary)' }}>{val.desc}</Text>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
          <Title order={2} size="2.2rem" mb={32} style={{ textAlign: 'center', color: 'var(--text-primary)', fontWeight: 700 }}>
            Education
          </Title>
          <Grid gutter={30}>
            {education.map((edu, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" style={{ height: '100%', background: 'var(--card-bg)', border: `1px solid var(--card-border)` }}>
                  <Stack gap={12}>
                    <Text size="lg" fw={700} style={{ color: '#1976d2' }}>{edu.degree}</Text>
                    <Text size="md" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{edu.school}</Text>
                    <Text size="sm" style={{ color: 'var(--text-secondary)' }}>{edu.year}</Text>
                    <Text size="xs" style={{ color: 'var(--text-secondary)' }}>{edu.description}</Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>

        {/* Hobbies & Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
          <Title order={2} size="2.2rem" mb={32} style={{ textAlign: 'center', color: 'var(--text-primary)', fontWeight: 700 }}>
            Hobbies & Interests
          </Title>
          <Grid gutter={30} justify="center">
            {hobbies.map((hobby, idx) => (
              <Grid.Col key={idx} span={{ base: 12, sm: 6, md: 3 }}>
                <motion.div
                  whileHover={{ scale: 1.06, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Paper shadow="md" radius="md" p="lg" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
                    <Box style={{ fontSize: 40, marginBottom: 12 }}>{hobby.icon}</Box>
                    <Text fw={700} style={{ color: '#1976d2', marginBottom: 4 }}>{hobby.title}</Text>
                    <Text size="sm" style={{ color: 'var(--text-secondary)' }}>{hobby.desc}</Text>
                  </Paper>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>

        {/* Tech Stack Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
        </motion.div>
      </Container>
    </MainLayout>
  );
} 