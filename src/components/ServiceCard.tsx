import React, { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Avatar, Box, Button, Card, CardActions, CardContent, Chip, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import type { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card sx={{ height: '100%' }}>
        <CardContent sx={{ display: 'grid', gap: 2.5 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', width: 56, height: 56, fontSize: '1.5rem' }}>
              {service.icon}
            </Avatar>
            <Box>
              <Typography variant="h5">{service.title}</Typography>
              <Typography variant="body2" color="text.secondary">{service.turnaround}</Typography>
            </Box>
          </Stack>

          <Typography color="text.secondary">{service.description}</Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {service.highlights.map((highlight) => (
              <Chip key={highlight} label={highlight} color="secondary" variant="outlined" />
            ))}
          </Stack>

          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>Common requests</Typography>
            <Stack component="ul" spacing={0.75} sx={{ pl: 2, m: 0 }}>
              {service.documents.slice(0, 4).map((document) => (
                <Typography key={document} component="li" variant="body2" color="text.secondary">
                  {document}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box
            component="button"
            type="button"
            onClick={() => setIsModalOpen(true)}
            sx={{
              p: 0,
              border: 0,
              borderRadius: 4,
              overflow: 'hidden',
              background: 'transparent',
              cursor: 'pointer'
            }}
          >
            <Box
              component="img"
              src={service.image}
              alt={`${service.title} reference`}
              sx={{ width: '100%', height: 180, objectFit: 'cover' }}
            />
          </Box>
        </CardContent>

        <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
          <Button component={RouterLink} to={`/services/${index}`} variant="contained" endIcon={<EastRoundedIcon />}>
            View Details
          </Button>
          <Button color="secondary" onClick={() => setIsModalOpen(true)}>
            Preview
          </Button>
        </CardActions>
      </Card>

      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} maxWidth="md" fullWidth>
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton onClick={() => setIsModalOpen(false)} sx={{ position: 'absolute', right: 12, top: 12, bgcolor: 'rgba(255,255,255,0.88)' }}>
            <CloseRoundedIcon />
          </IconButton>
          <Box component="img" src={service.image} alt={`${service.title} reference`} sx={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', bgcolor: '#f6f1e8' }} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceCard;