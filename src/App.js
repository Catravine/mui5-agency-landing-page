import React from 'react';
import { Button, Typography, Box } from '@mui/material'
import CustomButton from './components/Button/';

const App = () => {
  return (
    <Box>
      <Button variant='contained' color='slateBlue'>Test</Button>
      <Typography variant='body1'>
        Hello World!
      </Typography>
      <CustomButton>
        Custom Button
      </CustomButton>
    </Box>
  );
}

export default App;
