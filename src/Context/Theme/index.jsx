import { colors, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useLocalStorage from '../../Hook/useLocalStorage';
import '../../style.css';
const ThemeContext = React.createContext();

const ThemeStore = (props) => {
  const [mode, setMode] = useLocalStorage({
    key: 'activeTheme',
    value: window.matchMedia('(prefers-color-scheme: dark)').matches,
  });

  const theme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
      default: {
        main: mode ? colors.grey[900] : colors.grey[100],
      },
      primary: {
        main: mode ? colors.red[400] : colors.red[800],
      },
      secondary: {
        main: mode ? colors.teal[200] : colors.teal[800],
      },
    },
    typography: {
      body1: {
        fontFamily: 'Domine , cursive',
      },
      subtitle2: {
        fontFamily: 'Oswald , cursive',
      },
      h5: {
        fontFamily: 'RobotoSlab , cursive',
      },
      h2: {
        fontFamily: 'RobotoSlab , cursive',
      },
      h3: {
        fontFamily: 'RobotoSlab , cursive',
      },
      subtitle1: {
        fontFamily: 'Oswald , cursive',
      },
    },
  });
  const handleChangeTheme = () => {
    setMode(!mode);
  };
  return (
    <ThemeContext.Provider value={{ mode, handleChangeTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
