import { Container, Grid, Text, Title, Card, Stack, Badge, useComputedColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Postman'] },
];

const education = [
  { degree: 'Bachelor of Computer Science', school: 'University of Technology', year: '2020 - 2024' },
  { degree: 'Web Development Bootcamp', school: 'Coding Academy', year: '2019' },
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
          <Title 
            order={1} 
            size="3rem" 
            mb={30}
            style={{ 
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}
          >
            About Me
          </Title>
          <Text 
            size="lg" 
            style={{ 
              textAlign: 'center',
              maxWidth: 800,
              margin: '0 auto',
              color: 'var(--text-secondary)',
              lineHeight: 1.7
            }}
          >
            I'm a passionate Full Stack Developer with 4+ years of experience creating modern web applications. 
            I love turning complex problems into simple, beautiful, and intuitive solutions. 
            When I'm not coding, you can find me exploring new technologies, contributing to open source, 
            or sharing knowledge with the developer community.
          </Text>
        </motion.div>

        {/* Skills Section */}
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
            Skills & Technologies
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
                    <Text 
                      size="lg" 
                      fw={600}
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {skillGroup.category}
                    </Text>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          size="sm" 
                          variant="light" 
                          color="blue"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Stack>
                </Card>
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
            Education
          </Title>
          <Grid gutter={30}>
            {education.map((edu, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6 }}>
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
                      {edu.degree}
                    </Text>
                    <Text 
                      size="md"
                      style={{ color: '#1976d2', fontWeight: 500 }}
                    >
                      {edu.school}
                    </Text>
                    <Text 
                      size="sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {edu.year}
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