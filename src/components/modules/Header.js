import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

import '../../App';

const preventDefault = (event) => event.preventDefault();

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            mameyuki.com
          </Typography>
          <Box sx={{ flexGrow: 15 }} onClick={preventDefault}>
            <Link href=".myselfCard" underline="hover" color="#FFFFFF">About</Link>&nbsp;&nbsp;&nbsp;
            <Link href=".title" underline="hover" color="#FFFFFF">Skill</Link>&nbsp;&nbsp;&nbsp;
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}