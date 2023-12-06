import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

 

function Header() {
  return (
    <AppBar position="static" sx={{backgroundColor: '#1b1b1b'}}>
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" style={{ height: '50px' }} />
        </div>
        <Button color="inherit" href="https://youthfulcities.com" sx={{ textTransform: 'none' }} startIcon={<LinkIcon />}>
          youthfulcities.com
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
