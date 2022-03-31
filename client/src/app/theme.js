import { createTheme } from '@mui/material/styles';

const darktheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#773637',
    },
    secondary: {
      main: '#dc7879',
    },
    background: {
      default: '#161616',
      paper: '#000000',
    },
    error: {
      main: '#6d1d17',
    },
    warning: {
      main: '#dc9e39',
    },
    info: {
      main: '#6bb9f9',
    },
    success: {
      main: '#269c2a',
    },
    divider: 'rgba(239,234,234,0.52)',
    
  },
  typography: {
    h1: {
      fontSize: 48,
      fontFamily: 'Centurian'
    },
  },
});

const lighttheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6195c3',
    },
    secondary: {
      main: '#184c83',
    },
    background: {
      default: '#e0f7fa',
    },
    success: {
      main: '#74d478',
    },
    warning: {
      main: '#fdab33',
    },
    error: {
      main: '#ec574c',
    },
    info: {
      main: '#2a95ea',
    },
    divider: 'rgba(0,0,0,0.36)',
    text: {
      primary: 'rgba(0,0,0,0.7)',
    },
  },
  typography: {
    h1: {
      fontSize: 48,
      fontFamily: 'Centurian'
    },
  },
});

export {
  darktheme,
  lighttheme
} 