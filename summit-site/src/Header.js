import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
        </Typography>
        <Button color="inherit" href="https://yourwebsite.com">
          Visit Website
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
