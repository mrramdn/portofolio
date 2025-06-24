import { Container, Grid, Text, Title, Card, Stack, TextInput, Textarea, Button, useComputedColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';

const contactInfo = [
  { 
    title: 'Email', 
    value: 'rifki@example.com',
    description: 'Send me an email anytime'
  },
  { 
    title: 'LinkedIn', 
    value: 'linkedin.com/in/rifki',
    description: 'Connect with me professionally'
  },
  { 
    title: 'GitHub', 
    value: 'github.com/rifki',
    description: 'Check out my projects'
  },
];

export default function Contact() {
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
            Get In Touch
          </Title>
          <Text 
            size="lg" 
            style={{ 
              textAlign: 'center',
              maxWidth: 600,
              margin: '0 auto',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}
          >
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate or just want to say hello!
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
              <Card 
                shadow="sm" 
                padding="xl" 
                radius="md"
                style={{ 
                  background: 'var(--card-bg)',
                  border: `1px solid var(--card-border)`,
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}
              >
                <Title 
                  order={2} 
                  size="2rem" 
                  mb={30}
                  style={{ color: 'var(--text-primary)' }}
                >
                  Send Message
                </Title>
                <Stack gap={20}>
                  <Grid>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Name"
                        placeholder="Your name"
                        required
                        styles={{
                          label: { color: 'var(--text-secondary)' },
                          input: { 
                            background: 'var(--card-bg)',
                            border: `1px solid var(--card-border)`,
                            color: 'var(--text-primary)',
                            transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                          }
                        }}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Email"
                        placeholder="your@email.com"
                        required
                        type="email"
                        styles={{
                          label: { color: 'var(--text-secondary)' },
                          input: { 
                            background: 'var(--card-bg)',
                            border: `1px solid var(--card-border)`,
                            color: 'var(--text-primary)',
                            transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                          }
                        }}
                      />
                    </Grid.Col>
                  </Grid>
                  <TextInput
                    label="Subject"
                    placeholder="What's this about?"
                    required
                    styles={{
                      label: { color: 'var(--text-secondary)' },
                      input: { 
                        background: 'var(--card-bg)',
                        border: `1px solid var(--card-border)`,
                        color: 'var(--text-primary)',
                        transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                      }
                    }}
                  />
                  <Textarea
                    label="Message"
                    placeholder="Your message..."
                    required
                    minRows={6}
                    styles={{
                      label: { color: 'var(--text-secondary)' },
                      input: { 
                        background: 'var(--card-bg)',
                        border: `1px solid var(--card-border)`,
                        color: 'var(--text-primary)',
                        transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                      }
                    }}
                  />
                  <Button 
                    size="lg" 
                    color="blue"
                    style={{ marginTop: 10 }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Card>
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
                  <Card 
                    key={index}
                    shadow="sm" 
                    padding="lg" 
                    radius="md"
                    style={{ 
                      background: 'var(--card-bg)',
                      border: `1px solid var(--card-border)`,
                      transition: 'background-color 0.3s ease, border-color 0.3s ease'
                    }}
                  >
                    <Stack gap={8}>
                      <Text 
                        size="lg" 
                        fw={600}
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {info.title}
                      </Text>
                      <Text 
                        size="md"
                        style={{ color: '#1976d2', fontWeight: 500 }}
                      >
                        {info.value}
                      </Text>
                      <Text 
                        size="sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {info.description}
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </MainLayout>
  );
} 