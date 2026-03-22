import React from 'react';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import { Alert, Box, Button, Paper, Snackbar, Stack, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SharePage: React.FC = () => {
  const shareUrl = window.location.origin;
  const [copied, setCopied] = React.useState(false);
  const { t } = useTranslation();

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(t('sharePage.shareText') + shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(t('sharePage.shareText') + shareUrl)}`;
        break;
      default:
        navigator.share?.({ title: t('header.brand'), url: shareUrl });
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
            <Typography variant="h2" gutterBottom>{t('sharePage.title')}</Typography>
            <Typography color="text.secondary">
              {t('sharePage.subtitle')}
            </Typography>
          </Box>

          <TextField label={t('common.form.websiteUrl')} value={shareUrl} fullWidth InputProps={{ readOnly: true }} />

          <Box sx={{ display: 'grid', gap: 1.5, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' } }}>
            <Button variant="contained" color="success" startIcon={<WhatsAppIcon />} onClick={() => handleShare('whatsapp')} fullWidth>
              {t('common.actions.whatsapp')}
            </Button>
            <Button variant="contained" startIcon={<FacebookRoundedIcon />} onClick={() => handleShare('facebook')} fullWidth>
              {t('common.actions.facebook')}
            </Button>
            <Button variant="contained" color="secondary" startIcon={<XIcon />} onClick={() => handleShare('twitter')} fullWidth>
              {t('common.actions.xTwitter')}
            </Button>
            <Button variant="outlined" startIcon={<ShareRoundedIcon />} onClick={() => handleShare('native')} fullWidth>
              {t('common.actions.nativeShare')}
            </Button>
            <Button variant="outlined" startIcon={<ContentCopyRoundedIcon />} onClick={handleCopy} fullWidth>
              {t('common.actions.copyLink')}
            </Button>
          </Box>
        </Stack>
      </Paper>

      <Snackbar open={copied} autoHideDuration={2500} onClose={() => setCopied(false)}>
        <Alert severity="success" variant="filled" onClose={() => setCopied(false)}>
          {t('sharePage.copied')}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default SharePage;