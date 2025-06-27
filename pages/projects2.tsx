import { Container, Grid, Title, useComputedColorScheme, Card, Stack, Badge, Text, Group, Paper, Box, Modal, Button } from '@mantine/core';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import { useEffect, useState } from 'react';


type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  status: string;
  details: string;
};



const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Built a scalable e-commerce platform with seamless checkout, real-time inventory, and analytics dashboard. Empowered businesses to grow online with robust features and beautiful UI.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Mantine UI'],
    image: '🛒',
    link: 'https://github.com/example/ecommerce',
    status: 'Featured',
    details: 'This project integrates Stripe for payments, supports multi-vendor, and has a custom analytics dashboard.'
  },
  {
    title: 'Task Management App',
    description: 'Developed a collaborative task management app with real-time updates, drag-and-drop, and team productivity insights. Helped teams boost efficiency and transparency.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: '📋',
    link: 'https://github.com/example/taskapp',
    status: 'New',
    details: 'Includes real-time notifications, Kanban board, and team chat.'
  },
  {
    title: 'Weather Dashboard',
    description: 'Designed an interactive weather dashboard with live data, maps, and charts. Enhanced user engagement with intuitive visuals and smooth performance.',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Mantine UI'],
    image: '🌤️',
    link: 'https://github.com/example/weather',
    status: '',
    details: 'Features interactive charts, map integration, and responsive design.'
  },
  {
    title: 'Portfolio Website',
    description: 'Created a personal portfolio with modern design, smooth animations, and responsive layout. Showcased skills and projects to attract new opportunities.',
    technologies: ['Next.js', 'Framer Motion', 'Mantine UI', 'TypeScript'],
    image: '💼',
    link: 'https://github.com/example/portfolio',
    status: 'Featured',
    details: 'Built with Next.js, Framer Motion for animation, and Mantine for UI consistency.'
  },
  {
    title: 'Chat Application',
    description: 'Engineered a real-time chat app with authentication, message history, and file sharing. Fostered better communication for remote teams.',
    technologies: ['React', 'Firebase', 'Mantine UI', 'WebRTC'],
    image: '💬',
    link: 'https://github.com/example/chat',
    status: '',
    details: 'Supports group chat, file sharing, and video calls.'
  },
  {
    title: 'Fitness Tracker',
    description: 'Built a fitness tracking app with workout planning, progress monitoring, and nutrition tracking. Empowered users to achieve their health goals.',
    technologies: ['React Native', 'Redux', 'Node.js', 'PostgreSQL'],
    image: '💪',
    link: 'https://github.com/example/fitness',
    status: '',
    details: 'Mobile-first, with progress charts and nutrition logging.'
  }
];

export default function Projects() {
  const computedColorScheme = useComputedColorScheme('light');
  const allTechs = Array.from(new Set(projects.flatMap(p => p.technologies)));
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.technologies.includes(filter)));
    }
  }, [filter]);

  return (
    <MainLayout>
      <Container size="lg" py={80}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title order={1} size="3rem" mb={60} style={{ textAlign: 'center', color: 'var(--text-primary)', fontWeight: 800 }}>
            My Projects
          </Title>
        </motion.div>
        <Group mb={32} justify="center">
          <Badge
            size="lg"
            color={filter === 'All' ? 'blue' : 'gray'}
            variant={filter === 'All' ? 'filled' : 'light'}
            style={{ cursor: 'pointer' }}
            onClick={() => setFilter('All')}
          >
            All
          </Badge>
          {allTechs.map((tech, idx) => (
            <Badge
              key={idx}
              size="lg"
              color={filter === tech ? 'blue' : 'gray'}
              variant={filter === tech ? 'filled' : 'light'}
              style={{ cursor: 'pointer' }}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </Badge>
          ))}
        </Group>
        <Grid gutter={30}>
          {filteredProjects.map((project, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(25, 118, 210, 0.18)' }}
                onClick={() => {
                  setSelected(project);
                  setOpened(true);
                }}
              >
                <Paper
                  shadow="md"
                  radius="md"
                  p="lg"
                  style={{
                    background: 'var(--card-bg)',
                    border: `1.5px solid #1976d2`,
                    minHeight: 260,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'box-shadow 0.3s, border-color 0.3s',
                    cursor: 'pointer',
                  }}
                >
                  <Stack gap={12}>
                    <Group gap={8} align="center">
                      <Box style={{ fontSize: 32 }}>{project.image}</Box>
                      <Title order={4} style={{ color: '#1976d2', fontWeight: 700 }}>{project.title}</Title>
                      {project.status && <Badge color={project.status === 'Featured' ? 'grape' : 'teal'}>{project.status}</Badge>}
                    </Group>
                    <Text size="sm" style={{ color: 'var(--text-primary)', marginBottom: 4 }}>{project.description}</Text>
                    <Group gap={8}>
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} size="xs" variant="filled" color="blue">{tech}</Badge>
                      ))}
                    </Group>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
        <Modal opened={opened} onClose={() => setOpened(false)} title={selected?.title} centered size="lg">
          <Stack gap={16}>
            <Group gap={8} align="center">
              <Box style={{ fontSize: 40 }}>{selected?.image}</Box>
              {selected?.status && <Badge color={selected.status === 'Featured' ? 'grape' : 'teal'}>{selected.status}</Badge>}
            </Group>
            <Text size="lg" fw={700} style={{ color: '#1976d2' }}>{selected?.title}</Text>
            <Text size="sm" style={{ color: 'var(--text-primary)' }}>{selected?.description}</Text>
            <Text size="sm" style={{ color: 'var(--text-secondary)' }}>{selected?.details}</Text>
            <Group gap={8}>
              {selected?.technologies?.map((tech, idx) => (
                <Badge key={idx} size="sm" variant="filled" color="blue">{tech}</Badge>
              ))}
            </Group>
            <Button component="a" href={selected?.link} target="_blank" rel="noopener noreferrer" color="blue" mt={8}>
              View on GitHub
            </Button>
          </Stack>
        </Modal>
      </Container>
    </MainLayout>
  );
} 