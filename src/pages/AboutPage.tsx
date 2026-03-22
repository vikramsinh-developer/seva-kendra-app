import React from 'react';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import { Box, Chip, Divider, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const pillarIcons = [<GroupsRoundedIcon color="primary" />, <VerifiedUserRoundedIcon color="primary" />, <PublicRoundedIcon color="primary" />];
  const pillars = t('aboutPage.pillars', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const servicePromise = t('aboutPage.promise', { returnObjects: true }) as string[];

  return (
    <Stack spacing={4}>
      <Paper sx={{ p: { xs: 3, md: 5 }, background: 'linear-gradient(135deg, rgba(197,123,23,0.12) 0%, rgba(31,107,79,0.1) 100%)' }}>
        <Stack spacing={2.5}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} useFlexGap flexWrap="wrap">
            <Chip icon={<LocationOnRoundedIcon />} label={t('aboutPage.chips.serving')} color="primary" variant="outlined" />
            <Chip icon={<LanguageRoundedIcon />} label={t('aboutPage.chips.languages')} color="secondary" variant="outlined" />
          </Stack>
          <Box>
            <Typography variant="h2" gutterBottom>{t('aboutPage.title')}</Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 820 }}>
              {t('aboutPage.intro')}
            </Typography>
          </Box>
        </Stack>
      </Paper>

      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
        {pillars.map((pillar, index) => (
          <Paper key={pillar.title} sx={{ p: 3 }}>
            <Stack spacing={2}>
              {pillarIcons[index]}
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
              <Typography variant="h5">{t('aboutPage.whyTitle')}</Typography>
            </Stack>
            <Typography color="text.secondary">
              {t('aboutPage.whyText')}
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
              <Typography variant="h5">{t('aboutPage.approachTitle')}</Typography>
            </Stack>
            <Typography color="text.secondary">
              {t('aboutPage.approachText1')}
            </Typography>
            <Typography color="text.secondary">
              {t('aboutPage.approachText2')}
            </Typography>
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
};

export default AboutPage;