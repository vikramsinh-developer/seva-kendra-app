import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../components/ServiceCard';
import { getLocalizedServices } from '../data/services';

const ServicesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  const localizedServices = getLocalizedServices(t);
  const serviceEntries = localizedServices.map((service, index) => ({ service, index }));
  const tabs = [
    { label: t('servicesSection.tabs.popular'), items: serviceEntries.slice(0, 3) },
    { label: t('servicesSection.tabs.all'), items: serviceEntries },
    { label: t('servicesSection.tabs.dakhale'), items: serviceEntries.filter(({ service }) => service.id === 'dakhale') }
  ];

  return (
    <Box component="section" sx={{ display: 'grid', gap: 3 }}>
      <Box>
        <Typography variant="h2" gutterBottom>
          {t('servicesSection.title')}
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
          {t('servicesSection.subtitle')}
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
