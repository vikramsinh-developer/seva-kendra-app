import React from 'react';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import { Box, Paper, Stack, Typography } from '@mui/material';

const AboutPage: React.FC = () => {
  const pillars = [
    {
      title: 'Citizen-first help',
      description: 'We focus on practical support that helps people complete day-to-day official and digital tasks without confusion.',
      icon: <GroupsRoundedIcon color="primary" />
    },
    {
      title: 'Trusted process',
      description: 'Applications and documents are reviewed with care before they move into online or office workflows.',
      icon: <VerifiedUserRoundedIcon color="primary" />
    },
    {
      title: 'Local access to digital services',
      description: 'The kendra bridges local citizens to larger government and utility systems through guided digital assistance.',
      icon: <PublicRoundedIcon color="primary" />
    }
  ];

  return (
    <Stack spacing={4}>
      <Paper sx={{ p: { xs: 3, md: 5 } }}>
        <Typography variant="h2" gutterBottom>About Us</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 820 }}>
          Gurudatta Maha e-Seva Kendra is a local digital service center in Maharashtra focused on making government, utility, and everyday documentation services easier to access. We combine practical guidance with digital tools so citizens can complete important tasks with less friction.
        </Typography>
      </Paper>

      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
        {pillars.map((pillar) => (
          <Paper key={pillar.title} sx={{ p: 3 }}>
            <Stack spacing={2}>
              {pillar.icon}
              <Typography variant="h5">{pillar.title}</Typography>
              <Typography color="text.secondary">{pillar.description}</Typography>
            </Stack>
          </Paper>
        ))}
      </Box>

      <Paper sx={{ p: { xs: 3, md: 4 } }}>
        <Typography variant="h5" gutterBottom>Why people visit the kendra</Typography>
        <Typography color="text.secondary">
          Residents and businesses use the kendra for applications, bill payments, record preparation, printing, scanning, and submission support. The goal is not just access to a computer, but access to a reliable process and someone who can guide it.
        </Typography>
      </Paper>
    </Stack>
  );
};

export default AboutPage;