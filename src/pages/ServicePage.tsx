import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ServicesTabs from '../components/ServicesTabs';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={4}>
      <div>
        <Typography variant="h2" gutterBottom>
          {t('servicesPage.title')}
        </Typography>
        <Typography color="text.secondary">
          {t('servicesPage.subtitle')}
        </Typography>
      </div>
      <ServicesTabs />
    </Stack>
  );
};

export default ServicesPage;