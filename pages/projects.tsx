import MainLayout from '../layouts/MainLayout';
import styles from '../styles/Projects.module.css';
import ProjectCard from '../components/ProjectCard';

const dummyProjects = [
  { title: 'Project 1', description: 'Deskripsi singkat project 1' },
  { title: 'Project 2', description: 'Deskripsi singkat project 2' },
];

export default function Projects() {
  return (
    <MainLayout>
      <div className={styles.projects}>
        <h1>Proyek Saya</h1>
        {dummyProjects.map((project, idx) => (
          <ProjectCard key={idx} title={project.title} description={project.description} />
        ))}
      </div>
    </MainLayout>
  );
} 