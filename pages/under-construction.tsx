import { Container, Title, Text, Center, Box, Button, Paper, Stack } from '@mantine/core';
import { IconTools } from '@tabler/icons-react';
import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';

export default function UnderConstruction() {
  return (
    <MainLayout>
      <Box style={{ minHeight: '80vh',   background: 'linear-gradient(135deg, var(--bg-primary) 60%, var(--bg-secondary) 100%)'}}>
        <Container size="sm" py={100}>
          <Center>
            <Paper shadow="md" radius="lg" p={40} style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)', maxWidth: 420 }}>
              <Stack align="center" gap={16}>
                <IconTools size={80} color="#1976d2" style={{ marginBottom: 8 }} />
                <Title order={2} style={{ color: '#1976d2', fontWeight: 900, marginBottom: 8 }}>
                  Under Construction
                </Title>
                <Text size="lg" style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: 4 }}>
                  This page is being built!
                </Text>
                <Text size="sm" style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>
                  We are working hard to bring you something awesome. Please check back soon or return to the homepage.
                </Text>
                <Button component={Link} href="/" color="blue" size="md" radius="md" variant="filled">
                  Back to Home
                </Button>
              </Stack>
            </Paper>
          </Center>
        </Container>
      </Box>
    </MainLayout>
  );
} 