import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import CreativeDesign from './components/CreativeDesign';
import Experience from './components/Experience';

const App = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <CreativeDesign />
      <Experience />
    </Box>
  );
}

export default App;
