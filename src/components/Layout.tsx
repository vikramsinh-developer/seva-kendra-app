import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';
import BottomNav from './BottomNav';
import Footer from './Footer';
import MobileShareFab from './MobileShareFab';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', overflowX: 'clip' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, width: '100%', overflowX: 'clip', pb: { xs: 'calc(84px + env(safe-area-inset-bottom, 0px))', md: 6 } }}>
        <Container maxWidth="lg" sx={{ py: { xs: 2.5, md: 5 }, px: { xs: 2, sm: 3 } }}>
          {children}
        </Container>
      </Box>
      <Footer />
      <MobileShareFab />
      <BottomNav />
    </Box>
  );
};

export default Layout;