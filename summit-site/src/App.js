import React from 'react';
import Header from './Header';
import { Typography } from '@mui/material';
import MainSection from './MainSection';

function App() {
  return (
    <div>
      <Header />

      <div style={{ margin: '20px' }}>
        <Typography variant="subtitle1" gutterBottom>
          Small Title
        </Typography>
        <Typography variant="h3" gutterBottom>
          Big Title
        </Typography>
      </div>

      <MainSection />

    </div>
  );
}

export default App;