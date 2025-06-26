import { Card, Text, Badge, Group, Stack, useComputedColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  status: string;
  details: string;
};

const [selected, setSelected] = useState<Project | null>(null);


export default function ProjectCard({ title, description, technologies, image, link, details }: Project) {
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        shadow="sm" 
        padding="lg" 
        radius="md"
        className="card-hover"
        style={{ 
          height: '100%',
          background: 'var(--card-bg)',
          border: `1px solid var(--card-border)`,
          cursor: 'pointer'
        }}
        onClick={() => window.open(link, '_blank')}
      >
        <Stack gap={16}>
          <div 
            style={{ 
              fontSize: '3rem', 
              textAlign: 'center',
              marginBottom: 8
            }}
          >
            {image}
          </div>
          
          <Text 
            size="lg" 
            fw={600}
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </Text>
          
          <Text 
            size="sm"
            style={{ 
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              flex: 1
            }}
          >
            {description}
          </Text>
          
          <Group gap={8} wrap="wrap">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                size="sm" 
                variant="light" 
                color="blue"
              >
                {tech}
              </Badge>
            ))}
          </Group>
        </Stack>
      </Card>
    </motion.div>
  );
} 