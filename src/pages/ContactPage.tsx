import React, { useState } from 'react';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import { Alert, Box, Button, Paper, Snackbar, Stack, TextField, Typography } from '@mui/material';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const contactItems = [
    {
      label: 'Address',
      value: 'Main Road, At. Post Niphad, Niphad, Nashik-422303, Maharashtra',
      icon: <PlaceRoundedIcon color="primary" />
    },
    {
      label: 'Phone',
      value: '+91 9404683013',
      href: 'tel:9404683013',
      icon: <CallRoundedIcon color="primary" />
    },
    {
      label: 'Email',
      value: 'rajendraghadge38@gmail.com',
      href: 'mailto:rajendraghadge38@gmail.com',
      icon: <EmailRoundedIcon color="primary" />
    },
    {
      label: 'Working Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM | Saturday: 9:00 AM - 4:00 PM | Sunday: Closed',
      icon: <AccessTimeRoundedIcon color="primary" />
    }
  ];

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
        <Typography variant="h2" gutterBottom>Contact Us</Typography>
        <Typography color="text.secondary">
          Reach out for service timings, required documents, and visit planning.
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 0.95fr) minmax(0, 1.05fr)' } }}>
        <Stack spacing={2}>
          {contactItems.map((item) => (
            <Paper key={item.label} sx={{ p: 2.5 }}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                {item.icon}
                <Box>
                  <Typography variant="h6">{item.label}</Typography>
                  <Typography component={item.href ? 'a' : 'p'} href={item.href} color="text.secondary" sx={{ mt: 0.5 }}>
                    {item.value}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Stack>

        <Paper component="form" onSubmit={handleSubmit} sx={{ p: { xs: 3, md: 4 }, display: 'grid', gap: 2.5 }}>
          <Typography variant="h5">Send us a message</Typography>
          <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required fullWidth />
          <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required fullWidth />
          <TextField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required fullWidth />
          <TextField label="Message" name="message" value={formData.message} onChange={handleChange} required multiline minRows={5} fullWidth />
          <Button type="submit" variant="contained" size="large">
            Send Message
          </Button>
        </Paper>
      </Box>

      <Snackbar open={submitted} autoHideDuration={3000} onClose={() => setSubmitted(false)}>
        <Alert severity="success" variant="filled" onClose={() => setSubmitted(false)}>
          Message captured locally. Connect this form to your backend or email service next.
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ContactPage;