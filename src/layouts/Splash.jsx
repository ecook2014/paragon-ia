import React from 'react';
import { Typography, Box, AppBar, Toolbar, Divider, Button } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import moneyIcon from '../styles/images/moneyIcon.png';

function Splash() {
  const location = useLocation();
  const navigate = useNavigate(); 

  const pages = [
    { name: 'Home', path: '/home' },
    { name: 'Strategy Tester', path: '/strategy-tester' },
    { name: 'About', path: '/about' }
  ];

  const handleButtonClick = (path) => {
    navigate(path); 
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#66C8DE' }}>
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '8px 0px 2px 0px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Typography variant="h2" sx={{ fontFamily: 'Jockey One' }}>Paragon</Typography>
                <img src={moneyIcon} alt="icon" width="30px" height="30px" />
              </Box>
              <Divider sx={{ borderColor: 'black', borderWidth: 1 }} />
              <Typography variant="h5" sx={{ color: 'black', fontFamily: 'Jockey One' }}>Investment Analytics</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', paddingLeft: '20px' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  disableRipple
                  sx={{
                    color: location.pathname === page.path ? 'white' : 'black',
                    textDecoration: location.pathname === page.path ? 'underline' : 'none',
                    backgroundColor: 'transparent',
                    fontSize: '20px',
                    fontFamily: 'Jockey One',
                    textTransform: 'none',
                    border: 'none !important',
                    outline: 'none !important',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                    },
                  }}
                  onClick={() => handleButtonClick(page.path)}
                >
                  <Typography variant='h4'>{page.name}</Typography>
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default Splash;
