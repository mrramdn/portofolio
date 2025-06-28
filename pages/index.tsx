import { Container, Grid, Text, Title, Badge, Card, Group, Stack, Avatar, useComputedColorScheme, Box, Paper, Divider } from '@mantine/core';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

const awards = [
  { title: '1st Winner UI/UX Design Competition National', organization: 'CCI Summit 2024 (Telkom University)', year: '2024', description: 'Recognized for delivering an intuitive and visually engaging design that balanced user experience with functionality.' },
  { title: 'Finalist UI/UX Design Competition National', organization: 'The Ace 2024 (Diponegoro University)', year: '2024', description: 'Competed with teams from various institutions to create innovative solutions utilizing AI to enhance user experiences.' },
  { title: 'Student Appreciation Recipient 2025', organization: 'Bina Nusantara University', year: '2025', description: 'Received a certificate of appreciation from BINUS University for representing the university in a national-level UI/UX design competition organized by Telkom University. ' },
];

const experience = [
  { role: 'Back-End Developer Intern', company: 'WIT. ID', duration: '2024 January - 2024 May', description: 'Handled end-to-end backend development, including API design, database structuring, and business logic implementation.' },
  { role: 'Team Promotion Intern', company: 'Bina Nusantara Group', duration: '2024 June - 2024 July', description: 'Supported event operations during expos and campus activations, ensuring smooth booth setup and visitor flow. Contributed to lead generation efforts by gathering audience feedback and promoting key offerings.' },
];

const timeline = [
  {
    year: '2024 September',
    title: 'First National Competition',
    description: 'Achieved first place among 60 teams in my debut national UI/UX competition, showcasing innovative design and teamwork.',
    impact: '1st Winner, UI/UX Design Competition — CCI Summit 2024 (Telkom University)',
  },
  {
    year: '2024 September',
    title: 'Second National Competition',
    description: 'Led my team to the finals, competing against top talents from across the country and gaining valuable experience in high-pressure environments.',
    impact: 'Finalist, UI/UX Design Competition — The Ace 2024 (Diponegoro University)',
  },
  {
    year: '2024 October',
    title: 'Third National Competition',
    description: 'Gained new insights and skills despite being eliminated in the first round, further fueling my passion for UI/UX design.',
    impact: 'Participant, UI/UX Design Competition 4C (Brawijaya University)',
  },
  {
    year: '2025 January',
    title: 'Fourth National Competition',
    description: 'Faced tough competition and learned from early elimination in the first round, strengthening my resolve to improve.',
    impact: 'Participant, UI/UX Design Competition Arkavidia (Institut Teknologi Bandung)',
  },
  {
    year: '2025 March',
    title: 'Fifth National Competition',
    description: 'Advanced to the second round, where my team was eliminated, but the experience enhanced my problem-solving and collaboration skills.',
    impact: 'Participant, UI/UX Design Competition Find IT (Universitas Gadjah Mada)',
  }
];

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind'] },
  { category: 'Backend', items: ['Laravel', 'MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Vercel', 'Figma', 'Postman'] },
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
              <Title order={1} size="3.5rem" mb={20} style={{ color: 'var(--text-primary)', fontWeight: 800, fontFamily: 'Inter, Nunito, sans-serif' }}>
                Hi, I'm <span style={{ color: '#1976d2' }}>Rifki Ramdani</span>
              </Title>
              <Text size="xl" mb={30} style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontFamily: 'Nunito, Inter, sans-serif' }}>
                I'm a passionate Full Stack Developer specializing in building impactful, scalable, and user-centric digital products. My mission is to bridge business goals with seamless user experiences through modern web technology and design thinking.
              </Text>
              <Group gap={16}>
                <Badge size="lg" variant="filled" color="blue">Laravel</Badge>
                <Badge size="lg" variant="filled" color="blue">React</Badge>
                <Badge size="lg" variant="filled" color="blue">Next.JS</Badge>
                <Badge size="lg" variant="filled" color="blue">Tailwind</Badge>
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

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
          <Title order={2} size="2.5rem" mb={40} style={{ textAlign: 'center', color: 'var(--text-primary)', fontWeight: 700 }}>
            Technical Expertise
          </Title>
          <Grid gutter={30}>
            {skills.map((skillGroup, index) => (
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
                  <Stack gap={16}>
                    <Text size="lg" fw={600} style={{ color: 'var(--text-primary)' }}>
                      {skillGroup.category}
                    </Text>
                    <Group gap={8}>
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} size="sm" variant="light" color="blue">
                          {skill}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
          <Title order={2} size="2.5rem" mb={40} style={{ textAlign: 'center', color: 'var(--text-primary)', fontWeight: 700 }}>
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
                    <Text size="lg" fw={700} style={{ color: '#1976d2' }}>
                      {award.title}
                    </Text>
                    <Text size="sm" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                      {award.organization}
                    </Text>
                    <Text size="xs" style={{ color: 'var(--text-secondary)' }}>
                      {award.description}
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
          <Title order={2} size="2.5rem" mb={40} style={{ textAlign: 'center', color: 'var(--text-primary)', fontWeight: 700 }}>
            Professional Experience
          </Title>
          <Grid gutter={30} justify="center">
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
                    <Text size="lg" fw={700} style={{ color: '#1976d2' }}>
                      {exp.role}
                    </Text>
                    <Text size="md" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                      {exp.company}
                    </Text>
                    <Text size="sm" style={{ color: 'var(--text-secondary)' }}>
                      {exp.duration}
                    </Text>
                    <Text size="xs" style={{ color: 'var(--text-secondary)' }}>
                      {exp.description}
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>

        {/* Journey Timeline Zig-Zag Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title order={2} size="2.5rem" mb={40} style={{ textAlign: 'center', color: 'var(--text-primary)', fontWeight: 700 }}>
            My Professional Journey
          </Title>
          <Box style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <Group key={item.year + '-' + index} align="flex-start" justify="space-between" style={{ position: 'relative', marginBottom: 48 }}>
                  {isLeft && (
                    <Box style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: 340 }}
                      >
                        <Paper shadow="md" radius="md" p="md" style={{ background: 'var(--card-bg)', border: '1.5px solid #1976d2', position: 'relative' }}>
                          <Badge color="blue" size="lg" variant="filled" style={{ position: 'absolute', top: -24, left: -24 }}>{item.year}</Badge>
                          <Title order={4} style={{ color: '#1976d2', fontWeight: 700, marginBottom: 8 }}>{item.title}</Title>
                          <Text size="sm" style={{ color: 'var(--text-primary)', marginBottom: 4 }}>{item.description}</Text>
                          <Text size="xs" style={{ color: 'var(--text-secondary)' }}>{item.impact}</Text>
                        </Paper>
                      </motion.div>
                    </Box>
                  )}
                  {/* Center line and dot */}
                  <Box style={{ width: 60, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <Box style={{ width: 8, height: 8, borderRadius: 8, background: '#1976d2', zIndex: 2, marginTop: 8, marginBottom: 8 }} />
                    {index < timeline.length - 1 && (
                      <Box style={{ width: 4, height: 80, background: 'linear-gradient(180deg, #1976d2 60%, transparent 100%)', borderRadius: 2, zIndex: 1 }} />
                    )}
                  </Box>
                  {!isLeft && (
                    <Box style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: 340 }}
                      >
                        <Paper shadow="md" radius="md" p="md" style={{ background: 'var(--card-bg)', border: '1.5px solid #1976d2', position: 'relative' }}>
                          <Badge color="blue" size="lg" variant="filled" style={{ position: 'absolute', top: -24, right: -24 }}>{item.year}</Badge>
                          <Title order={4} style={{ color: '#1976d2', fontWeight: 700, marginBottom: 8 }}>{item.title}</Title>
                          <Text size="sm" style={{ color: 'var(--text-primary)', marginBottom: 4 }}>{item.description}</Text>
                          <Text size="xs" style={{ color: 'var(--text-secondary)' }}>{item.impact}</Text>
                        </Paper>
                      </motion.div>
                    </Box>
                  )}
                </Group>
              );
            })}
          </Box>
        </motion.div>
      </Container>
    </MainLayout>
  );
}
