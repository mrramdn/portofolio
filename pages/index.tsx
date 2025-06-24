import { Container, Grid, Text, Title, Badge, Card, Group, Stack, Avatar, useComputedColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

const awards = [
  { title: 'Best Developer 2023', organization: 'Tech Awards', year: '2023' },
  { title: 'Innovation Award', organization: 'Startup Competition', year: '2022' },
  { title: 'Excellence in Coding', organization: 'CodeFest', year: '2021' },
];

const experience = [
  { role: 'Senior Frontend Developer', company: 'TechCorp', duration: '2022 - Present' },
  { role: 'Full Stack Developer', company: 'StartupXYZ', duration: '2020 - 2022' },
  { role: 'Junior Developer', company: 'WebSolutions', duration: '2018 - 2020' },
];

const timeline = [
  { year: '2023', event: 'Launched 10+ successful projects' },
  { year: '2022', event: 'Led team of 5 developers' },
  { year: '2021', event: 'Mastered React & Next.js' },
  { year: '2020', event: 'Started freelance career' },
];

export default function Home() {
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <MainLayout>
      <Container size="lg" py={80}>
        {/* Hero Section */}
        <Grid gutter={60} align="center" mb={80}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Title 
                order={1} 
                size="3.5rem" 
                mb={20}
                style={{ 
                  color: 'var(--text-primary)',
                  fontWeight: 700 
                }}
              >
                Hi, I'm <span style={{ color: '#1976d2' }}>Rifki</span>
              </Title>
              <Text 
                size="xl" 
                mb={30}
                style={{ 
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6 
                }}
              >
                A passionate Full Stack Developer with expertise in modern web technologies. 
                I create beautiful, functional, and user-friendly applications that make a difference.
              </Text>
              <Group gap={16}>
                <Badge size="lg" variant="filled" color="blue">React</Badge>
                <Badge size="lg" variant="filled" color="blue">Next.js</Badge>
                <Badge size="lg" variant="filled" color="blue">TypeScript</Badge>
                <Badge size="lg" variant="filled" color="blue">Node.js</Badge>
              </Group>
            </motion.div>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textAlign: 'center' }}
            >
              <Avatar 
                size={300} 
                radius={150}
                src="/images/avatar.jpg"
                style={{ 
                  margin: '0 auto',
                  border: `4px solid ${computedColorScheme === 'dark' ? '#2C2E33' : '#e3f2fd'}`,
                  boxShadow: computedColorScheme === 'dark' 
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                    : '0 8px 32px rgba(25, 118, 210, 0.15)'
                }}
              />
            </motion.div>
          </Grid.Col>
        </Grid>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
          <Title 
            order={2} 
            size="2.5rem" 
            mb={40}
            style={{ 
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}
          >
            Awards & Recognition
          </Title>
          <Grid gutter={30}>
            {awards.map((award, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <Card 
                  shadow="sm" 
                  padding="lg" 
                  radius="md"
                  style={{ 
                    height: '100%',
                    background: 'var(--card-bg)',
                    border: `1px solid var(--card-border)`,
                    transition: 'background-color 0.3s ease, border-color 0.3s ease'
                  }}
                >
                  <Stack gap={12}>
                    <Text 
                      size="lg" 
                      fw={600}
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {award.title}
                    </Text>
                    <Text 
                      size="sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {award.organization}
                    </Text>
                    <Badge size="sm" variant="light" color="blue">{award.year}</Badge>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
          <Title 
            order={2} 
            size="2.5rem" 
            mb={40}
            style={{ 
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}
          >
            Professional Experience
          </Title>
          <Grid gutter={30}>
            {experience.map((exp, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                <Card 
                  shadow="sm" 
                  padding="lg" 
                  radius="md"
                  style={{ 
                    height: '100%',
                    background: 'var(--card-bg)',
                    border: `1px solid var(--card-border)`,
                    transition: 'background-color 0.3s ease, border-color 0.3s ease'
                  }}
                >
                  <Stack gap={12}>
                    <Text 
                      size="lg" 
                      fw={600}
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {exp.role}
                    </Text>
                    <Text 
                      size="md"
                      style={{ color: '#1976d2', fontWeight: 500 }}
                    >
                      {exp.company}
                    </Text>
                    <Text 
                      size="sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {exp.duration}
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title 
            order={2} 
            size="2.5rem" 
            mb={40}
            style={{ 
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}
          >
            Journey Timeline
          </Title>
          <Grid gutter={30}>
            {timeline.map((item, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                <Card 
                  shadow="sm" 
                  padding="lg" 
                  radius="md"
                  style={{ 
                    height: '100%',
                    background: 'var(--card-bg)',
                    border: `1px solid var(--card-border)`,
                    textAlign: 'center',
                    transition: 'background-color 0.3s ease, border-color 0.3s ease'
                  }}
                >
                  <Stack gap={12}>
                    <Badge size="lg" variant="filled" color="blue">{item.year}</Badge>
                    <Text 
                      size="md"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.event}
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </MainLayout>
  );
}
