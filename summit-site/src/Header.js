import LinkIcon from '@mui/icons-material/Link';
import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';

const Header = () => (
  <AppBar position='static' sx={{ backgroundColor: '#1b1b1b' }}>
    <Toolbar>
      <div style={{ flexGrow: 1 }}>
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt='Logo'
          style={{ height: '50px' }}
        />
      </div>
      <Button
        color='inherit'
        href='https://youthfulcities.com'
        sx={{ textTransform: 'none' }}
        startIcon={<LinkIcon />}>
        youthfulcities.com
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
