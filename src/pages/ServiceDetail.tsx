import React from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import { Avatar, Box, Button, Chip, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { getLocalizedServices } from '../data/services';

const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const index = Number(id ?? -1);
  const { t } = useTranslation();
  const service = getLocalizedServices(t)[index];

  if (!service) {
    return (
      <Paper sx={{ p: 4 }}>
        <Typography variant="h2" gutterBottom>{t('serviceDetail.notFoundTitle')}</Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>{t('serviceDetail.notFoundText')}</Typography>
        <Button component={RouterLink} to="/services" startIcon={<ArrowBackRoundedIcon />}>{t('common.actions.backToServices')}</Button>
      </Paper>
    );
  }

  return (
    <Stack spacing={4}>
      <Button component={RouterLink} to="/services" startIcon={<ArrowBackRoundedIcon />} sx={{ alignSelf: 'flex-start' }}>
        {t('common.actions.backToServices')}
      </Button>

      <Paper sx={{ p: { xs: 3, md: 4 } }}>
        <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.2fr) minmax(280px, 0.8fr)' } }}>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main', color: 'primary.contrastText', fontSize: '1.8rem' }}>
                {service.icon}
              </Avatar>
              <Box>
                <Typography variant="h2">{service.title}</Typography>
                <Chip icon={<ScheduleRoundedIcon />} label={service.turnaround} color="secondary" variant="outlined" sx={{ mt: 1 }} />
              </Box>
            </Stack>

            <Typography color="text.secondary">{service.description}</Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {service.highlights.map((highlight) => (
                <Chip key={highlight} label={highlight} />
              ))}
            </Stack>

            <Box>
              <Typography variant="h5" gutterBottom>{t('serviceDetail.documentsHeading')}</Typography>
              <Stack component="ol" spacing={1} sx={{ pl: 3, m: 0 }}>
                {service.documents.map((document) => (
                  <Typography key={document} component="li" color="text.secondary">
                    {document}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Stack>

          <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.72)' }}>
            <Box component="img" src={service.image} alt={service.title} sx={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 3, mb: 2.5 }} />
            <Typography variant="h6" gutterBottom>{t('serviceDetail.helpTitle')}</Typography>
            <Typography color="text.secondary" sx={{ mb: 2.5 }}>
              {t('serviceDetail.helpText')}
            </Typography>
            <Button component={RouterLink} to="/contact" variant="contained" fullWidth>
              {t('common.actions.contactKendra')}
            </Button>
          </Paper>
        </Box>
      </Paper>
    </Stack>
  );
};

export default ServiceDetail;
