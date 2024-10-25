import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Header from './components/header';


const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Meu Projeto React</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;