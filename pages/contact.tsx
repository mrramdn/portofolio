import { Container, Grid, Text, Title, Card, Stack, TextInput, Textarea, Button, useComputedColorScheme, Paper, Group, Box, Badge } from '@mantine/core';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import { useState } from 'react';

const contactInfo = [
  { 
    title: 'Email', 
    value: 'rifki@example.com',
    description: 'Send me an email anytime',
    link: 'mailto:rifki.ramdani.work@gmail.com',
    icon: '✉️'
  },
  { 
    title: 'LinkedIn', 
    value: 'linkedin.com/in/mrramdn',
    description: 'Connect with me professionally',
    link: 'https://linkedin.com/in/rifki',
    icon: '💼'
  },
  { 
    title: 'GitHub', 
    value: 'github.com/rifki',
    description: 'Check out my projects',
    link: 'https://github.com/mrramdn',
    icon: '🐙'
  },
];

export default function Contact() {
  const computedColorScheme = useComputedColorScheme('light');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          <Title order={1} size="3rem" mb={30} style={{ textAlign: 'center', color: 'var(--text-primary)', fontWeight: 800 }}>
            Let's Connect
          </Title>
          <Text size="lg" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            I'm always open to new opportunities, collaborations, or just a friendly chat. Drop me a message and let's create something amazing together!
          </Text>
        </motion.div>
        <Grid gutter={60}>
          {/* Contact Form */}
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper shadow="md" p="xl" radius="md" style={{ background: 'var(--card-bg)', border: `1px solid var(--card-border)` }}>
                <Title order={2} size="2rem" mb={30} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                  Send a Message
                </Title>
                <Stack gap={20}>
                  <Grid>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Name"
                        placeholder="Your name"
                        required
                        styles={{ label: { color: 'var(--text-secondary)' }, input: { background: 'var(--card-bg)', border: `1px solid var(--card-border)`, color: 'var(--text-primary)' } }}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Email"
                        placeholder="your@email.com"
                        required
                        type="email"
                        styles={{ label: { color: 'var(--text-secondary)' }, input: { background: 'var(--card-bg)', border: `1px solid var(--card-border)`, color: 'var(--text-primary)' } }}
                      />
                    </Grid.Col>
                  </Grid>
                  <TextInput
                    label="Subject"
                    placeholder="What's this about?"
                    required
                    styles={{ label: { color: 'var(--text-secondary)' }, input: { background: 'var(--card-bg)', border: `1px solid var(--card-border)`, color: 'var(--text-primary)' } }}
                  />
                  <Textarea
                    label="Message"
                    placeholder="Your message..."
                    required
                    minRows={6}
                    styles={{ label: { color: 'var(--text-secondary)' }, input: { background: 'var(--card-bg)', border: `1px solid var(--card-border)`, color: 'var(--text-primary)' } }}
                  />
                  <Button
                    size="lg"
                    color="blue"
                    style={{ marginTop: 10 }}
                    onClick={() => {
                      setSubmitted(true);
                      setTimeout(() => setSubmitted(false), 2000);
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
                {submitted && (
                  <Text size="sm" color="green" mt={8} style={{ textAlign: 'center' }}>
                    Thank you! Your message has been sent (dummy alert).
                  </Text>
                )}
              </Paper>
            </motion.div>
          </Grid.Col>
          {/* Contact Info */}
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Stack gap={20}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(25, 118, 210, 0.18)' }}
                  >
                    <Paper shadow="sm" p="lg" radius="md" style={{ background: 'var(--card-bg)', border: `1px solid var(--card-border)`, display: 'flex', alignItems: 'center' }}>
                      <Box style={{ fontSize: 32, marginRight: 16 }}>{info.icon}</Box>
                      <Stack gap={4}>
                        <Group gap={8}>
                          <Text size="lg" fw={700} style={{ color: '#1976d2' }}>{info.title}</Text>
                          <Badge size="sm" color="blue" variant="light">{info.title}</Badge>
                          {info.title === 'Email' && (
                            <Button size="xs" color="gray" variant="outline" onClick={() => {navigator.clipboard.writeText(info.value); setCopied(true); setTimeout(() => setCopied(false), 1500);}}>
                              {copied ? 'Copied!' : 'Copy'}
                            </Button>
                          )}
                        </Group>
                        <Text size="md" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                          <a href={info.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{info.value}</a>
                        </Text>
                        <Text size="sm" style={{ color: 'var(--text-secondary)' }}>{info.description}</Text>
                      </Stack>
                    </Paper>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </MainLayout>
  );
} 