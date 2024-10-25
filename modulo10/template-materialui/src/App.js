import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import Login from './pages/Login';
import Header from './components/header';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Button onClick={() => setDarkMode(!darkMode)}>
        Mudar para {darkMode ? 'claro' : 'escuro'}
      </Button>
      {/* Outras rotas */}
      <Login />
    </ThemeProvider>
  );
}

export default App;