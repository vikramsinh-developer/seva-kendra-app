import React from 'react';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import { Box, Paper, Stack, Typography } from '@mui/material';
import Hero from '../components/Hero';
import ServicesTabs from '../components/ServicesTabs';

const HomePage: React.FC = () => {
  const highlights = [
    {
      title: 'Quick Turnaround',
      description: 'Everyday citizen tasks handled with practical speed and clear next steps.',
      icon: <BoltRoundedIcon color="primary" />
    },
    {
      title: 'Document Accuracy',
      description: 'We review applications and required proofs before submission to reduce errors.',
      icon: <FactCheckRoundedIcon color="primary" />
    },
    {
      title: 'Reliable Support',
      description: 'Local assistance for forms, payments, records, and service follow-up.',
      icon: <SupportAgentRoundedIcon color="primary" />
    }
  ];

  return (
    <Stack spacing={5}>
      <Hero
        title="Gurudatta Maha e-Seva Kendra"
        subtitle="Your Trusted Digital Services Center in Maharashtra. All citizen, government, and commercial services at one place, delivered fast and reliably."
        image="https://connectitapp.in/static/media/mee_seva_logo.a411c879.jpg"
        ctaButtons={[
          { label: 'View Services', href: '/services', primary: true },
          { label: 'Contact Us', href: '/contact', primary: false }
        ]}
      />

      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
        {highlights.map((item) => (
          <Paper key={item.title} sx={{ p: 3 }}>
            <Stack spacing={2}>
              {item.icon}
              <Typography variant="h5">{item.title}</Typography>
              <Typography color="text.secondary">{item.description}</Typography>
            </Stack>
          </Paper>
        ))}
      </Box>

      <ServicesTabs />
    </Stack>
  );
};

export default HomePage;