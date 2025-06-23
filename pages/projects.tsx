import MainLayout from '../layouts/MainLayout';
import { Title, SimpleGrid } from '@mantine/core';
import ProjectCard from '../components/ProjectCard';

const dummyProjects = [
  {
    title: 'Personal Website',
    description: 'Website portofolio pribadi dengan Next.js dan animasi Framer Motion.',
    image: '/images/project1.jpg',
    demo: 'https://rifki.dev',
    source: 'https://github.com/rifki/portofolio',
  },
  {
    title: 'Aplikasi Todo',
    description: 'Aplikasi manajemen tugas sederhana berbasis React.',
    image: '/images/project2.jpg',
    demo: 'https://todo.rifki.dev',
    source: 'https://github.com/rifki/todo-app',
  },
  {
    title: 'Landing Page Animasi',
    description: 'Landing page dengan animasi interaktif dan responsif.',
    image: '/images/project3.jpg',
    demo: 'https://animasi.rifki.dev',
    source: 'https://github.com/rifki/landing-animasi',
  },
];

export default function Projects() {
  return (
    <MainLayout>
      <Title order={1} c="blue.7" mb={32}>Proyek Saya</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={32}>
        {dummyProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </SimpleGrid>
    </MainLayout>
  );
} 