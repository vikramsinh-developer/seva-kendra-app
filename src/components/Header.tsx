import React from 'react';
import { alpha } from '@mui/material/styles';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import { AppBar, Avatar, Box, Button, Chip, Container, Stack, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', labelKey: 'common.nav.home' },
  { to: '/services', labelKey: 'common.nav.services' },
  { to: '/gallery', labelKey: 'common.nav.gallery' },
  { to: '/about', labelKey: 'common.nav.about' },
  { to: '/contact', labelKey: 'common.nav.contact' }
];

const Header: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const activeLanguage = i18n.resolvedLanguage === 'mr' ? 'mr' : 'en';

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.88)
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 82 } }}>
          <Stack direction="row" spacing={{ xs: 1.25, md: 2 }} alignItems="center" sx={{ flexGrow: 1, minWidth: 0, pr: 1 }}>
            <Avatar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 } }}>
              <AccountBalanceRoundedIcon />
            </Avatar>
            <Box sx={{ minWidth: 0 }}>
              <Typography
                component={RouterLink}
                to="/"
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  display: 'block',
                  fontSize: { xs: '0.98rem', sm: '1.15rem' },
                  lineHeight: 1.2,
                  whiteSpace: { xs: 'normal', sm: 'nowrap' }
                }}
              >
                {t('header.brand')}
              </Typography>
              <Chip
                label={t('header.tagline')}
                size="small"
                sx={{
                  mt: 0.75,
                  maxWidth: '100%',
                  display: { xs: 'none', sm: 'inline-flex' },
                  bgcolor: 'rgba(197, 123, 23, 0.12)',
                  color: 'primary.dark'
                }}
              />
            </Box>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <ToggleButtonGroup
              exclusive
              size="small"
              value={activeLanguage}
              onChange={(_, value) => {
                if (value) {
                  void i18n.changeLanguage(value);
                }
              }}
              aria-label={t('common.languageSwitcher.ariaLabel')}
              sx={{
                bgcolor: 'rgba(255,255,255,0.75)',
                borderRadius: 999,
                '& .MuiToggleButton-root': {
                  border: 0,
                  px: { xs: 1.2, sm: 1.5 },
                  py: 0.5,
                  fontSize: { xs: '0.72rem', sm: '0.8rem' },
                  textTransform: 'none'
                }
              }}
            >
              <ToggleButton value="en">{t('common.languages.en')}</ToggleButton>
              <ToggleButton value="mr">{t('common.languages.mr')}</ToggleButton>
            </ToggleButtonGroup>

            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => {
              const active = item.to === '/' ? location.pathname === item.to : location.pathname.startsWith(item.to);

              return (
                <Button
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  color={active ? 'primary' : 'inherit'}
                  variant={active ? 'contained' : 'text'}
                >
                  {t(item.labelKey)}
                </Button>
              );
            })}
          </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;