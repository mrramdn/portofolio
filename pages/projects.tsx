import { Container, Grid, Title, useComputedColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring user authentication, product management, and payment integration.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    image: '🛒',
    link: 'https://github.com/example/ecommerce'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: '📋',
    link: 'https://github.com/example/taskapp'
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard that displays current weather conditions and forecasts with interactive maps and charts.',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS Modules'],
    image: '🌤️',
    link: 'https://github.com/example/weather'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects and skills with smooth animations and modern design.',
    technologies: ['Next.js', 'Framer Motion', 'Mantine', 'TypeScript'],
    image: '💼',
    link: 'https://github.com/example/portfolio'
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application with user authentication, message history, and file sharing capabilities.',
    technologies: ['React', 'Firebase', 'Material-UI', 'WebRTC'],
    image: '💬',
    link: 'https://github.com/example/chat'
  },
  {
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking app with workout planning, progress monitoring, and nutrition tracking.',
    technologies: ['React Native', 'Redux', 'Node.js', 'PostgreSQL'],
    image: '💪',
    link: 'https://github.com/example/fitness'
  }
];

export default function Projects() {
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <MainLayout>
      <Container size="lg" py={80}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title 
            order={1} 
            size="3rem" 
            mb={60}
            style={{ 
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}
          >
            My Projects
          </Title>
        </motion.div>

        <Grid gutter={30}>
          {projects.map((project, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </MainLayout>
  );
} 