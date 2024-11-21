import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Replace with your brand's preferred font family
    h1: {
      fontWeight: 600,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2.25rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontWeight: 300,
      fontSize: '0.875rem',
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: '1.125rem',
    },
  },
});

export default theme;
