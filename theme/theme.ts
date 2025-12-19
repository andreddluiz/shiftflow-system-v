
import { createTheme } from '@mui/material/styles';

export const golTheme = createTheme({
  palette: {
    primary: {
      main: '#FF6B35',
      dark: '#E85A2A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3A3A3A',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 700,
      color: '#3A3A3A',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 24px',
        },
      },
    },
  },
});
