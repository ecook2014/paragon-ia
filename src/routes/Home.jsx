
import { Typography, Box, AppBar, Toolbar, Divider } from '@mui/material';
import moneyIcon from '../styles/images/moneyIcon.png'

function Home() {

  return (
    <AppBar position="static" sx={{ backgroundColor: '#66C8DE' }}>
        <Toolbar disableGutters>
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Typography variant="h2">Paragon</Typography>
                <img src={moneyIcon} alt="icon" width="30px" height="30px"/>
              </Box>
              <Divider sx={{ borderColor: 'black', borderWidth: 1 }}/>
              <Typography variant="h5" sx={{ color: 'black' }}>Investment Analytics</Typography>
            </Box>
          </Box>
        </Toolbar>
    </AppBar>
  );
}

export default Home;
