import React, { useState } from 'react';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material';
import GalleryGrid from '../components/GalleryGrid';

const GalleryPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const images = [
    { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop', alt: 'E-Seva Kendra Office' },
    { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop', alt: 'Government Services Counter' },
    { src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop', alt: 'Digital Services Desk' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', alt: 'Customer Assistance' },
    { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop', alt: 'Document Processing' }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <Stack spacing={4}>
      <Paper sx={{ p: { xs: 2.5, md: 3.5 } }}>
        <Stack spacing={2}>
          <div>
            <Typography variant="h2" gutterBottom>Gallery</Typography>
            <Typography color="text.secondary">
              A quick visual look at the service environment, support desks, and citizen assistance experience.
            </Typography>
          </div>

          <Box
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            sx={{ position: 'relative', borderRadius: 5, overflow: 'hidden' }}
          >
            <Box
              component="img"
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              sx={{ width: '100%', height: { xs: 280, md: 420 }, objectFit: 'cover' }}
            />
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.52) 100%)' }} />
            <Typography variant="h5" sx={{ position: 'absolute', left: 24, bottom: 24, color: '#fff' }}>
              {images[currentIndex].alt}
            </Typography>
            <IconButton onClick={prevSlide} sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.86)' }}>
              <ChevronLeftRoundedIcon />
            </IconButton>
            <IconButton onClick={nextSlide} sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.86)' }}>
              <ChevronRightRoundedIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {images.map((image, idx) => (
              <Box
                key={image.alt}
                component="button"
                type="button"
                onClick={() => setCurrentIndex(idx)}
                sx={{
                  width: 72,
                  height: 72,
                  p: 0,
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: idx === currentIndex ? '3px solid' : '1px solid',
                  borderColor: idx === currentIndex ? 'primary.main' : 'divider',
                  cursor: 'pointer',
                  background: 'transparent'
                }}
              >
                <Box component="img" src={image.src} alt={image.alt} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
            ))}
          </Box>
        </Stack>
      </Paper>

      <GalleryGrid />
    </Stack>
  );
};

export default GalleryPage;