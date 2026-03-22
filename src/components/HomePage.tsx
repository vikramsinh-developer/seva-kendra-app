import React from 'react';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import ServicesTabs from '../components/ServicesTabs';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const icons = [<BoltRoundedIcon color="primary" />, <FactCheckRoundedIcon color="primary" />, <SupportAgentRoundedIcon color="primary" />];
  const highlights = t('home.highlights', { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <Stack spacing={5}>
      <Hero
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        image="https://connectitapp.in/static/media/mee_seva_logo.a411c879.jpg"
        ctaButtons={[
          { label: t('common.actions.viewServices'), href: '/services', primary: true },
          { label: t('common.actions.contactUs'), href: '/contact', primary: false }
        ]}
      />

      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
        {highlights.map((item, index) => (
          <Paper key={item.title} sx={{ p: 3 }}>
            <Stack spacing={2}>
              {icons[index]}
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