import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c0976',
    },
    secondary: {
      main: '#6b3fc9',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;