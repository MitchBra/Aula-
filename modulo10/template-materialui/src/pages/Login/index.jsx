import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid, Button, Drawer } from '@mui/material';



const Login = () => {
  const [login, setLogin] = useState('');
  const [state, setState] = useState({ left: false, right: false, top: false, bottom: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Your drawer content goes here */}
      <p>Drawer content</p>
    </div>
  );

  return (
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel htmlFor="login-nome">Login</InputLabel>
        <Input 
          id="login-nome" 
          aria-describedby="login_nome_helper_text" 
          value={login} 
          onChange={e => setLogin(e.target.value)} 
        />
        <FormHelperText id="login_nome_helper_text">Enter your login.</FormHelperText>
      </FormControl>

      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Login;

