import React from 'react';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import { Box, Chip, Divider, Paper, Stack, Typography } from '@mui/material';

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

  const servicePromise = [
    'Application and form filling support',
    'Printing, scanning, and document preparation',
    'Utility bill payment assistance',
    'Certificate and online submission guidance'
  ];

  return (
    <Stack spacing={4}>
      <Paper sx={{ p: { xs: 3, md: 5 }, background: 'linear-gradient(135deg, rgba(197,123,23,0.12) 0%, rgba(31,107,79,0.1) 100%)' }}>
        <Stack spacing={2.5}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} useFlexGap flexWrap="wrap">
            <Chip icon={<LocationOnRoundedIcon />} label="Serving Nagthane, Satara" color="primary" variant="outlined" />
            <Chip icon={<LanguageRoundedIcon />} label="Citizen support in Marathi, Hindi, and English" color="secondary" variant="outlined" />
          </Stack>
          <Box>
            <Typography variant="h2" gutterBottom>About Us</Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 820 }}>
              Gurudatta Maha e-Seva Kendra is a community-focused digital service center serving citizens with practical help for documents, online applications, payments, and day-to-day service tasks. The goal is simple: reduce confusion, save time, and make every visit useful.
            </Typography>
          </Box>
        </Stack>
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

      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' } }}>
        <Paper sx={{ p: { xs: 3, md: 4 } }}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <AutoAwesomeRoundedIcon color="primary" />
              <Typography variant="h5">Why people visit the kendra</Typography>
            </Stack>
            <Typography color="text.secondary">
              Residents and businesses visit the kendra for help that is both digital and practical: understanding what is required, preparing correct documents, and completing the process with confidence.
            </Typography>
            <Divider />
            <Stack spacing={1.25}>
              {servicePromise.map((item) => (
                <Stack key={item} direction="row" spacing={1.25} alignItems="center">
                  <TaskAltRoundedIcon color="secondary" fontSize="small" />
                  <Typography color="text.secondary">{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Paper>

        <Paper sx={{ p: { xs: 3, md: 4 } }}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <GroupsRoundedIcon color="primary" />
              <Typography variant="h5">Service approach</Typography>
            </Stack>
            <Typography color="text.secondary">
              The center is designed to feel approachable and efficient. Instead of only offering access to online systems, it offers guided assistance, local understanding, and real follow-through.
            </Typography>
            <Typography color="text.secondary">
              Whether the task is a certificate request, exam form, payment, or document preparation, the focus stays on clean execution and clear communication.
            </Typography>
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
};

export default AboutPage;