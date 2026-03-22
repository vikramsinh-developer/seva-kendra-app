import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', bgcolor: 'rgba(255, 253, 250, 0.84)', backdropFilter: 'blur(10px)' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} justifyContent="space-between" sx={{ py: 3, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Gurudatta Maha e-Seva Kendra. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Niphad, Nashik, Maharashtra · Citizen-first digital support center
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;