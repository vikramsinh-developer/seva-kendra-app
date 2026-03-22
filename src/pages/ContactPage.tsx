import React, { useState } from 'react';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import { Alert, Box, Button, Chip, Paper, Snackbar, Stack, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const contactItems = [
    {
      label: t('contactPage.items.addressLabel'),
      value: t('contactPage.items.addressValue'),
      icon: <PlaceRoundedIcon color="primary" />
    },
    {
      label: t('contactPage.items.phoneLabel'),
      value: t('contactPage.items.phoneValue'),
      href: 'tel:9404683013',
      icon: <CallRoundedIcon color="primary" />
    },
    {
      label: t('contactPage.items.emailLabel'),
      value: t('contactPage.items.emailValue'),
      href: 'mailto:rajendraghadge38@gmail.com',
      icon: <EmailRoundedIcon color="primary" />
    },
    {
      label: t('contactPage.items.whatsappLabel'),
      value: t('contactPage.items.whatsappValue'),
      href: 'https://wa.me/919404683013',
      icon: <WhatsAppIcon color="success" />
    },
    {
      label: t('contactPage.items.instagramLabel'),
      value: t('contactPage.items.instagramValue'),
      href: 'https://instagram.com/gurudatta_mahaeseva',
      icon: <InstagramIcon color="secondary" />
    },
    {
      label: t('contactPage.items.hoursLabel'),
      value: t('contactPage.items.hoursValue'),
      icon: <AccessTimeRoundedIcon color="primary" />
    }
  ];

  const quickHelp = t('contactPage.quickHelp', { returnObjects: true }) as string[];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h2" gutterBottom>{t('contactPage.title')}</Typography>
        <Typography color="text.secondary">
          {t('contactPage.subtitle')}
        </Typography>
      </Box>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25} useFlexGap flexWrap="wrap">
        <Chip icon={<FmdGoodRoundedIcon />} label={t('contactPage.chips.location')} color="primary" variant="outlined" />
        <Chip icon={<WhatsAppIcon />} label={t('contactPage.chips.whatsapp')} color="success" variant="outlined" />
      </Stack>

      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 0.95fr) minmax(0, 1.05fr)' } }}>
        <Stack spacing={2}>
          {contactItems.map((item) => (
            <Paper key={item.label} sx={{ p: 2.5 }}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                {item.icon}
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="h6">{item.label}</Typography>
                  <Typography component={item.href ? 'a' : 'p'} href={item.href} color="text.secondary" sx={{ mt: 0.5, overflowWrap: 'anywhere' }}>
                    {item.value}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          ))}

          <Paper sx={{ p: 2.5, background: 'linear-gradient(135deg, rgba(197,123,23,0.12) 0%, rgba(31,107,79,0.08) 100%)' }}>
            <Stack spacing={1.25}>
              <Typography variant="h6">{t('contactPage.quickHelpTitle')}</Typography>
              {quickHelp.map((item) => (
                <Typography key={item} color="text.secondary">• {item}</Typography>
              ))}
            </Stack>
          </Paper>
        </Stack>

        <Paper component="form" onSubmit={handleSubmit} sx={{ p: { xs: 3, md: 4 }, display: 'grid', gap: 2.5 }}>
          <Typography variant="h5">{t('contactPage.formTitle')}</Typography>
          <TextField label={t('common.form.name')} name="name" value={formData.name} onChange={handleChange} required fullWidth />
          <TextField label={t('common.form.email')} name="email" type="email" value={formData.email} onChange={handleChange} required fullWidth />
          <TextField label={t('common.form.phone')} name="phone" type="tel" value={formData.phone} onChange={handleChange} required fullWidth />
          <TextField label={t('common.form.message')} name="message" value={formData.message} onChange={handleChange} required multiline minRows={5} fullWidth />
          <Button type="submit" variant="contained" size="large">
            {t('common.actions.sendMessage')}
          </Button>
        </Paper>
      </Box>

      <Snackbar open={submitted} autoHideDuration={3000} onClose={() => setSubmitted(false)}>
        <Alert severity="success" variant="filled" onClose={() => setSubmitted(false)}>
          {t('contactPage.snackbar')}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ContactPage;