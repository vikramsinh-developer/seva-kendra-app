import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const ServicesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const serviceEntries = services.map((service, index) => ({ service, index }));
  const tabs = [
    { label: 'Popular Services', items: serviceEntries.slice(0, 3) },
    { label: 'All Services', items: serviceEntries },
    { label: 'Dakhale', items: serviceEntries.filter(({ service }) => service.title === 'Dakhale') }
  ];

  return (
    <Box component="section" sx={{ display: 'grid', gap: 3 }}>
      <Box>
        <Typography variant="h2" gutterBottom>
          Our Services
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
          Browse the most requested citizen and business support services available at the kendra.
        </Typography>
      </Box>

      <Tabs
        value={activeTab}
        onChange={(_, value) => setActiveTab(value)}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          minHeight: { xs: 44, md: 48 },
          '& .MuiTab-root': {
            minHeight: { xs: 44, md: 48 },
            px: { xs: 1.5, md: 2 },
            fontSize: { xs: '0.78rem', sm: '0.9rem' }
          }
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab.label} label={tab.label} />
        ))}
      </Tabs>

      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' } }}>
        {tabs[activeTab].items.map(({ service, index }) => (
          <ServiceCard key={`${service.title}-${index}`} service={service} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default ServicesTabs;
