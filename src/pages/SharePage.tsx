import React from 'react';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import { Alert, Box, Button, Paper, Snackbar, Stack, TextField, Typography } from '@mui/material';

const SharePage: React.FC = () => {
  const shareUrl = window.location.origin;
  const [copied, setCopied] = React.useState(false);

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent('Check out Maha e-Seva Kendra: ' + shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out Maha e-Seva Kendra: ' + shareUrl)}`;
        break;
      default:
        navigator.share?.({ title: 'Maha e-Seva Kendra', url: shareUrl });
        return;
    }
    window.open(url, '_blank');
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
  };

  return (
    <Stack spacing={4}>
      <Paper sx={{ p: { xs: 3, md: 4 } }}>
        <Stack spacing={2.5}>
          <Box>
            <Typography variant="h2" gutterBottom>Share Our Services</Typography>
            <Typography color="text.secondary">
              Help more people discover the kendra by sharing the website directly or posting it to social platforms.
            </Typography>
          </Box>

          <TextField label="Website URL" value={shareUrl} fullWidth InputProps={{ readOnly: true }} />

          <Box sx={{ display: 'grid', gap: 1.5, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' } }}>
            <Button variant="contained" color="success" startIcon={<WhatsAppIcon />} onClick={() => handleShare('whatsapp')} fullWidth>
              WhatsApp
            </Button>
            <Button variant="contained" startIcon={<FacebookRoundedIcon />} onClick={() => handleShare('facebook')} fullWidth>
              Facebook
            </Button>
            <Button variant="contained" color="secondary" startIcon={<XIcon />} onClick={() => handleShare('twitter')} fullWidth>
              X / Twitter
            </Button>
            <Button variant="outlined" startIcon={<ShareRoundedIcon />} onClick={() => handleShare('native')} fullWidth>
              Native Share
            </Button>
            <Button variant="outlined" startIcon={<ContentCopyRoundedIcon />} onClick={handleCopy} fullWidth>
              Copy Link
            </Button>
          </Box>
        </Stack>
      </Paper>

      <Snackbar open={copied} autoHideDuration={2500} onClose={() => setCopied(false)}>
        <Alert severity="success" variant="filled" onClose={() => setCopied(false)}>
          Website link copied.
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default SharePage;