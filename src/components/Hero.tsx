import React from 'react';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import { alpha } from '@mui/material/styles';
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaButtons?: { label: string; href: string; primary?: boolean }[];
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  ctaButtons = []
}) => {
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        overflow: 'hidden',
        p: { xs: 2.25, sm: 3, md: 5 },
        background: (theme) => `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.2)} 0%, ${alpha(theme.palette.secondary.light, 0.12)} 100%)`
      }}
    >
      <Box sx={{ display: 'grid', gap: { xs: 2.5, md: 4 }, alignItems: 'center', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.15fr) minmax(320px, 0.85fr)' } }}>
        <Stack spacing={{ xs: 2.25, md: 3 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems={{ xs: 'flex-start', sm: 'center' }}>
            <Chip icon={<VerifiedRoundedIcon />} label={t('home.hero.trustedChip')} color="secondary" variant="outlined" sx={{ maxWidth: '100%' }} />
            <Chip label={t('home.hero.fastChip')} sx={{ maxWidth: '100%', bgcolor: 'rgba(255,255,255,0.8)' }} />
          </Stack>

          <Box>
            <Typography variant="h1" color="text.primary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 680, fontSize: { xs: '0.98rem', sm: '1.05rem' } }}>
              {subtitle}
            </Typography>
          </Box>

          {ctaButtons.length > 0 && (
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              {ctaButtons.map((btn, idx) => {
                const isInternalLink = btn.href.startsWith('/');

                if (isInternalLink) {
                  return (
                    <Button
                      key={idx}
                      component={RouterLink}
                      to={btn.href}
                      variant={btn.primary ? 'contained' : 'outlined'}
                      color={btn.primary ? 'primary' : 'secondary'}
                      endIcon={<ArrowOutwardRoundedIcon />}
                      fullWidth
                    >
                      {btn.label}
                    </Button>
                  );
                }

                return (
                  <Button
                    key={idx}
                    component="a"
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={btn.primary ? 'contained' : 'outlined'}
                    color={btn.primary ? 'primary' : 'secondary'}
                    endIcon={<ArrowOutwardRoundedIcon />}
                    fullWidth
                  >
                    {btn.label}
                  </Button>
                );
              })}
            </Stack>
          )}
        </Stack>

        <Box
          sx={{
            position: 'relative',
            borderRadius: 3,
            overflow: 'hidden',
            minHeight: { xs: 220, sm: 260, md: 360 },
            boxShadow: '0 24px 60px rgba(29, 53, 87, 0.18)'
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(31,42,55,0.05) 0%, rgba(31,42,55,0.6) 100%)'
            }}
          />
          <Stack spacing={1} sx={{ position: 'absolute', left: { xs: 16, md: 20 }, right: { xs: 16, md: 20 }, bottom: { xs: 16, md: 20 }, color: '#fff' }}>
            <Typography variant="h5" sx={{ color: '#fff', fontSize: { xs: '1.05rem', sm: '1.35rem' } }}>{t('home.hero.overlayTitle')}</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.86)', fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
              {t('home.hero.overlaySubtitle')}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};

export default Hero;