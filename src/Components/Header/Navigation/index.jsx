import {  Toolbar, Stack, IconButton, Badge } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconMenu, Logo, IconNotification, IconFavorite } from '../../../Utils';
import Profile from '../../Profile';
import SearchBars from '../../SearchBar';
import ToggleTheme from '../../ToggleTheme';

const Navigation = ({ handleOpenSwipeDrawer }) => {
  return (
    <Toolbar>
      <Stack
        className={'navigation'}
        flexGrow={1}
        display={'flex'}
        flexDirection={'row'}
        flexWrap={'wrap'}
      >
        <Stack className="Navigation_MenuDrawer">
          <IconButton onClick={handleOpenSwipeDrawer}>{IconMenu}</IconButton>
        </Stack>
        <Stack ml={2} className="Navigation_Logo">
          <NavLink to="">
            <IconButton color="primary">{Logo}</IconButton>
          </NavLink>
        </Stack>
        <Stack
          flexGrow={1}
          ml={7}
          mr={6}
          className="Navigation_SearchBar"
          sx={{
            display: {
              sm: 'flex',
              xs: 'none',
            },
          }}
        >
          <SearchBars />
        </Stack>
        <Stack
          mr={4}
          gap={2}
          display={'flex'}
          flexDirection={'row'}
          className="Navigation_Details"
          sx={{
            ml: {
              md: 0,
              xs: 'auto',
            },
          }}
        >
          <IconButton>
            <Badge badgeContent={4} color="primary">
              {IconNotification}
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="primary">
              {IconFavorite}
            </Badge>
          </IconButton>
        </Stack>
        <Stack className="Navigation_ToggleTheme" sx={{ ml: 'auto' }}>
          <ToggleTheme />
        </Stack>
      </Stack>
    </Toolbar>
  );
};

export default Navigation;
