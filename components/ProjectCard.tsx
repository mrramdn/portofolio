import { Card, Text, Button, Group, Image } from '@mantine/core';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  demo: string;
  source: string;
};

export default function ProjectCard({ title, description, image, demo, source }: ProjectCardProps) {
  return (
    <MotionCard
      shadow="md"
      padding="lg"
      radius="md"
      withBorder
      whileHover={{ scale: 1.04, boxShadow: '0 4px 16px #0002' }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Image src={image} alt={title} height={160} radius="md" mb={12} withPlaceholder />
      <Text fw={700} size="lg" mt={8} mb={4} ta="center">{title}</Text>
      <Text c="dimmed" size="sm" ta="center">{description}</Text>
      <Group mt={16} gap={8}>
        <Button component="a" href={demo} target="_blank" rel="noopener noreferrer" color="blue" size="xs">Demo</Button>
        <Button component="a" href={source} target="_blank" rel="noopener noreferrer" variant="outline" color="blue" size="xs">Source</Button>
      </Group>
    </MotionCard>
  );
} 