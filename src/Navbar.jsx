import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';


export default function Navbar() {
    return (
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button variant="outlined" style={{marginRight: "5px"}} sx={{ my: 2, display: 'block' }} href='/contacts'>
                Users
              </Button>

              <Button variant="outlined" sx={{ my: 2, display: 'block' }} href='/tasks'>
                Tasks
              </Button>

              {/* <Button variant="outlined" style={{marginRight: "5px"}} sx={{ my: 2, display: 'block' }}>
                {/* <AddNewContact/> */}
              {/* </Button> */} 


          </Box>
        
        </Toolbar>
  );
}