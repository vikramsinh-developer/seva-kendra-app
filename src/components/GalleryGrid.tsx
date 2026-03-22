import React, { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Card, CardActionArea, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const gallerySources = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
];

const GalleryGrid: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string } | null>(null);
  const { t } = useTranslation();
  const galleryTitles = t('galleryPage.gridTitles', { returnObjects: true }) as string[];
  const galleryImages = gallerySources.map((src, index) => ({ src, title: galleryTitles[index] }));

  return (
    <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' } }}>
      {galleryImages.map((image) => (
        <Card key={`${image.title}-${image.src}`}>
          <CardActionArea onClick={() => setSelectedImg(image)}>
            <Box component="img" src={image.src} alt={image.title} sx={{ width: '100%', height: 240, objectFit: 'cover' }} />
            <Box sx={{ p: 2 }}>
              <Typography variant="subtitle1">{image.title}</Typography>
            </Box>
          </CardActionArea>
        </Card>
      ))}

      {selectedImg && (
        <Dialog open={Boolean(selectedImg)} onClose={() => setSelectedImg(null)} maxWidth="lg" fullWidth>
          <DialogContent sx={{ p: 0, position: 'relative' }}>
            <IconButton onClick={() => setSelectedImg(null)} sx={{ position: 'absolute', right: 12, top: 12, bgcolor: 'rgba(255,255,255,0.88)' }}>
              <CloseRoundedIcon />
            </IconButton>
            <Box component="img" src={selectedImg.src} alt={selectedImg.title} sx={{ width: '100%', maxHeight: '82vh', objectFit: 'contain', bgcolor: '#f6f1e8' }} />
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

export default GalleryGrid;
