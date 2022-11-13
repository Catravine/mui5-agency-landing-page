import React from 'react';
import { Button } from '@mui/material';

const styles = {
  btn: (theme) => ({
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontsize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '20px 60px',
    backgroundColor: theme.palette.slateBlue.main,
    borderRadious: '8px',
    '&:hover': {
      backgroundColor: '#646ab0'
    }
  }),
}

const CustomButton = ({children}) => {
  return <Button sx={styles.btn}>{children}</Button>
}

export default CustomButton;