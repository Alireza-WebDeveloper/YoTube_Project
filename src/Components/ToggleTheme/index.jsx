import { FormControlLabel, IconButton, Switch } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/Theme';
import { IconDarkMode, IconLightMode } from '../../Utils';
const ToggleTheme = () => {
  const { mode, handleChangeTheme } = useContext(ThemeContext);
  return (
    <>
      <FormControlLabel
        onChange={handleChangeTheme}
        label={
          mode ? (
            <IconButton color="secondary">{IconDarkMode}</IconButton>
          ) : (
            <IconButton color="secondary">{IconLightMode}</IconButton>
          )
        }
        control={<Switch />}
      />
    </>
  );
};

export default ToggleTheme;
