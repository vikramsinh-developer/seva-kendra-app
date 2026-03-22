import React from 'react';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import { alpha } from '@mui/material/styles';
import { Fab, Tooltip } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const MobileShareFab: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/share') {
    return null;
  }

  return (
    <Tooltip title="Share" placement="left">
      <Fab
        color="primary"
        aria-label="Share"
        onClick={() => navigate('/share')}
        sx={{
          display: { xs: 'inline-flex', md: 'none' },
          position: 'fixed',
          right: 16,
          bottom: 'calc(88px + env(safe-area-inset-bottom, 0px))',
          zIndex: (theme) => theme.zIndex.appBar + 1,
          width: 54,
          height: 54,
          boxShadow: `0 14px 30px ${alpha('#1d3557', 0.24)}`
        }}
      >
        <ShareRoundedIcon />
      </Fab>
    </Tooltip>
  );
};

export default MobileShareFab;