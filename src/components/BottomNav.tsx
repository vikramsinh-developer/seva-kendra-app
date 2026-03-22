import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { alpha } from '@mui/material/styles';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const primaryNavItems = [
  { to: '/', icon: <HomeRoundedIcon />, label: 'Home' },
  { to: '/services', icon: <DesignServicesRoundedIcon />, label: 'Services' },
  { to: '/gallery', icon: <CollectionsRoundedIcon />, label: 'Gallery' },
  { to: '/contact', icon: <CallRoundedIcon />, label: 'Contact' },
];

const secondaryNavItems = [
  { to: '/share', icon: <ShareRoundedIcon />, label: 'Share' },
  { to: '/about', icon: <InfoRoundedIcon />, label: 'About' }
];

const BottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMoreOpen, setIsMoreOpen] = React.useState(false);

  const isRouteActive = (to: string) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to));
  const isSecondaryActive = secondaryNavItems.some((item) => isRouteActive(item.to));

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          px: 1,
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
        <Stack direction="row" spacing={0.5} justifyContent="space-between" alignItems="stretch" sx={{ width: '100%' }}>
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
                  px: 0.5,
                  py: 0.875,
                  border: 0,
                  borderRadius: 3,
                  background: active ? 'linear-gradient(135deg, rgba(197,123,23,0.18) 0%, rgba(31,107,79,0.12) 100%)' : 'transparent',
                  color: active ? 'primary.dark' : 'text.secondary',
                  cursor: 'pointer'
                }}
              >
                <Stack spacing={0.375} alignItems="center">
                  {item.icon}
                  <Typography sx={{ fontSize: '0.68rem', fontWeight: active ? 700 : 600, lineHeight: 1, whiteSpace: 'nowrap', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.label}
                  </Typography>
                </Stack>
              </Box>
            );
          })}

          <Box
            component="button"
            type="button"
            onClick={() => setIsMoreOpen(true)}
            sx={{
              flex: 1,
              minWidth: 0,
              width: 0,
              px: 0.5,
              py: 0.875,
              border: 0,
              borderRadius: 3,
              background: isSecondaryActive ? 'linear-gradient(135deg, rgba(197,123,23,0.18) 0%, rgba(31,107,79,0.12) 100%)' : 'transparent',
              color: isSecondaryActive ? 'primary.dark' : 'text.secondary',
              cursor: 'pointer'
            }}
          >
            <Stack spacing={0.375} alignItems="center">
              <MoreHorizRoundedIcon />
              <Typography sx={{ fontSize: '0.68rem', fontWeight: isSecondaryActive ? 700 : 600, lineHeight: 1, whiteSpace: 'nowrap', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                More
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Paper>

      <Drawer anchor="bottom" open={isMoreOpen} onClose={() => setIsMoreOpen(false)}>
        <Box sx={{ p: 2.5, pb: 3, borderTopLeftRadius: 24, borderTopRightRadius: 24, bgcolor: 'background.paper' }}>
          <Box sx={{ width: 48, height: 5, borderRadius: 999, bgcolor: 'divider', mx: 'auto', mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 1.5 }}>More options</Typography>
          <List disablePadding>
            {secondaryNavItems.map((item) => (
              <ListItemButton
                key={item.to}
                onClick={() => {
                  navigate(item.to);
                  setIsMoreOpen(false);
                }}
                sx={{ borderRadius: 3, mb: 0.5 }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: isRouteActive(item.to) ? 'primary.main' : 'text.secondary' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default BottomNav;
