import { alpha, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { brandColors } from './colors';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brandColors.saffron,
      dark: brandColors.saffronDark,
      light: brandColors.saffronLight,
      contrastText: '#ffffff'
    },
    secondary: {
      main: brandColors.forest,
      dark: brandColors.forestDark,
      light: brandColors.forestLight,
      contrastText: '#ffffff'
    },
    background: {
      default: brandColors.cream,
      paper: brandColors.paper
    },
    text: {
      primary: brandColors.text,
      secondary: brandColors.muted
    },
    success: {
      main: brandColors.success
    },
    warning: {
      main: brandColors.warning
    },
    error: {
      main: brandColors.error
    },
    divider: alpha(brandColors.indigo, 0.12)
  },
  shape: {
    borderRadius: 16
  },
  typography: {
    fontFamily: 'Poppins, Segoe UI, sans-serif',
    h1: {
      fontFamily: 'Merriweather, Georgia, serif',
      fontSize: 'clamp(2.4rem, 4vw, 4.4rem)',
      fontWeight: 700,
      lineHeight: 1.08
    },
    h2: {
      fontFamily: 'Merriweather, Georgia, serif',
      fontSize: 'clamp(1.9rem, 3vw, 3rem)',
      fontWeight: 700,
      lineHeight: 1.15
    },
    h3: {
      fontSize: 'clamp(1.35rem, 2vw, 1.8rem)',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h5: {
      fontWeight: 700
    },
    subtitle1: {
      fontSize: '1.05rem',
      lineHeight: 1.7
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: 0
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          width: '100%',
          maxWidth: '100%',
          overflowX: 'clip',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        },
        body: {
          background: `radial-gradient(circle at top left, ${alpha(brandColors.saffronLight, 0.18)} 0%, transparent 32%), radial-gradient(circle at bottom right, ${alpha(brandColors.forestLight, 0.18)} 0%, transparent 28%), ${brandColors.cream}`,
          minHeight: '100vh',
          width: '100%',
          maxWidth: '100%',
          margin: 0,
          overflowX: 'clip',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        },
        '#root': {
          width: '100%',
          maxWidth: '100%',
          overflowX: 'clip',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        },
        'html::-webkit-scrollbar, body::-webkit-scrollbar, #root::-webkit-scrollbar': {
          display: 'none',
          width: 0,
          height: 0
        },
        a: {
          color: 'inherit',
          textDecoration: 'none'
        },
        img: {
          maxWidth: '100%',
          display: 'block'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          border: `1px solid ${alpha(brandColors.indigo, 0.08)}`,
          boxShadow: `0 18px 50px ${alpha(brandColors.indigo, 0.08)}`
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
          minHeight: 44
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;