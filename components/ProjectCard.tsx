type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, minWidth: 250 }}>
      <h2 style={{ margin: 0 }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
} 