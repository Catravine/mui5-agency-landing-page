import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

const breakpoints = createBreakpoints({

})

const theme = createTheme({
  palette: {
    primary: {
      main: '#686868'
    },
    slateBlue: {
      main: '#777feb'
    }
  },
  typography: {
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '39px',
      textTransform: 'capitalize',
      color: '#000',
      [breakpoints.up('md')]: {
        fontSize: '64px',
        lineHeight: '78px',
      },
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '29px',
      textTransform: 'capitalize',
      color: '#000'
    },
    body1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#686868',
      [breakpoints.up('md')]: {
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '29px',
      },
    }
  }
});

export default theme;