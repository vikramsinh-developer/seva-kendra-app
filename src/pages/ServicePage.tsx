import React from 'react';
import { Stack, Typography } from '@mui/material';
import ServicesTabs from '../components/ServicesTabs';

const ServicesPage: React.FC = () => {
  return (
    <Stack spacing={4}>
      <div>
        <Typography variant="h2" gutterBottom>
          Service Desk
        </Typography>
        <Typography color="text.secondary">
          Explore available services, required documents, and dedicated support areas.
        </Typography>
      </div>
      <ServicesTabs />
    </Stack>
  );
};

export default ServicesPage;