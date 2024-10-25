import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" style={{ marginTop: 'auto' }}>
      <Toolbar>
        <Typography variant="body1">© 2024 Meu Projeto</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;