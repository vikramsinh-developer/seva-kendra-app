import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { alpha } from '@mui/material/styles';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const primaryNavItems = [
  { to: '/', icon: <HomeRoundedIcon />, labelKey: 'common.nav.home' },
  { to: '/services', icon: <DesignServicesRoundedIcon />, labelKey: 'common.nav.services' },
  { to: '/gallery', icon: <CollectionsRoundedIcon />, labelKey: 'common.nav.gallery' },
  { to: '/about', icon: <InfoRoundedIcon />, labelKey: 'common.nav.about' },
  { to: '/contact', icon: <CallRoundedIcon />, labelKey: 'common.nav.contact' },
];

const BottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const isRouteActive = (to: string) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to));

  return (
    <Paper
      elevation={0}
      sx={{
        display: { xs: 'block', md: 'none' },
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        px: 0.75,
        pt: 0.75,
        pb: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))',
        borderRadius: 0,
        borderTop: '1px solid',
        borderRight: 0,
        borderBottom: 0,
        borderLeft: 0,
        borderColor: 'divider',
        bgcolor: (theme) => alpha(theme.palette.background.paper, 0.94),
        backdropFilter: 'blur(18px)',
        boxShadow: '0 -10px 30px rgba(29, 53, 87, 0.12)',
        boxSizing: 'border-box',
        zIndex: (theme) => theme.zIndex.appBar
      }}
    >
      <Stack direction="row" spacing={0.25} justifyContent="space-between" alignItems="stretch" sx={{ width: '100%' }}>
        {primaryNavItems.map((item) => {
          const active = isRouteActive(item.to);

          return (
            <Box
              key={item.to}
              component="button"
              type="button"
              onClick={() => navigate(item.to)}
              sx={{
                flex: 1,
                minWidth: 0,
                width: 0,
                px: 0.25,
                py: 0.875,
                border: 0,
                borderRadius: 2.5,
                background: active ? 'linear-gradient(135deg, rgba(197,123,23,0.18) 0%, rgba(31,107,79,0.12) 100%)' : 'transparent',
                color: active ? 'primary.dark' : 'text.secondary',
                cursor: 'pointer'
              }}
            >
              <Stack spacing={0.375} alignItems="center">
                {item.icon}
                <Typography sx={{ fontSize: '0.64rem', fontWeight: active ? 700 : 600, lineHeight: 1, whiteSpace: 'nowrap', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {t(item.labelKey)}
                </Typography>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default BottomNav;
