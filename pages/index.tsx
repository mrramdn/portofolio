import { Container, Grid, Text, Title, Badge, Card, Group, Stack, Avatar, useComputedColorScheme, Box, Paper, Divider } from '@mantine/core';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

const awards = [
  { title: 'Best Developer 2023', organization: 'Tech Awards Indonesia', year: '2023', description: 'Recognized for outstanding contributions to web development and innovative solutions.' },
  { title: 'Innovation Award', organization: 'Startup Competition Jakarta', year: '2022', description: 'Awarded for developing cutting-edge applications that solve real-world problems.' },
  { title: 'Excellence in Coding', organization: 'CodeFest Southeast Asia', year: '2021', description: 'Honored for exceptional coding skills and best practices implementation.' },
];

const experience = [
  { role: 'Senior Frontend Developer', company: 'TechCorp Indonesia', duration: '2022 - Present', description: 'Leading frontend development team, implementing modern React patterns and optimizing performance.' },
  { role: 'Full Stack Developer', company: 'StartupXYZ', duration: '2020 - 2022', description: 'Built scalable web applications using modern technologies and cloud infrastructure.' },
  { role: 'Junior Developer', company: 'WebSolutions', duration: '2018 - 2020', description: 'Started career with focus on responsive design and user experience optimization.' },
];

const timeline = [
  {
    year: '2023',
    title: 'Enterprise Project Launch',
    description: 'Successfully launched 15+ enterprise-grade web applications, driving digital transformation for clients.',
    impact: 'Boosted client revenue by 30% through innovative solutions.',
  },
  {
    year: '2022',
    title: 'Team Leadership',
    description: 'Led a team of 8 developers, fostering a culture of collaboration and continuous learning.',
    impact: 'Reduced project delivery time by 40% and improved code quality.',
  },
  {
    year: '2021',
    title: 'React & Next.js Mastery',
    description: 'Achieved expert-level proficiency in React and Next.js, building high-performance, scalable apps.',
    impact: 'Enhanced user experience and SEO for multiple products.',
  },
  {
    year: '2020',
    title: 'Freelance Milestone',
    description: 'Started freelance journey, delivering tailored solutions for diverse clients.',
    impact: 'Built strong client relationships and a solid portfolio.',
  },
];

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Mantine UI', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Postman'] },
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
                Hi, I'm <span style={{ color: '#1976d2' }}>Rifki</span>
              </Title>
              <Text size="xl" mb={30} style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontFamily: 'Nunito, Inter, sans-serif' }}>
                I'm a passionate Full Stack Developer specializing in building impactful, scalable, and user-centric digital products. My mission is to bridge business goals with seamless user experiences through modern web technology and design thinking.
              </Text>
              <Group gap={16}>
                <Badge size="lg" variant="filled" color="blue">React</Badge>
                <Badge size="lg" variant="filled" color="blue">Next.js</Badge>
                <Badge size="lg" variant="filled" color="blue">TypeScript</Badge>
                <Badge size="lg" variant="filled" color="blue">Mantine UI</Badge>
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
                <Group key={item.year} align="flex-start" position="apart" style={{ position: 'relative', marginBottom: 48 }}>
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
