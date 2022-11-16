import { AppBar } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useBreakPoint from '../../Hook/useBreakPoint';
import Navigation from './Navigation';
import SwipeDrawer from './SwipeDrawer';

const Header = () => {
  const [openSwipeDrawer, setOpenSwipeDrawer] = useState(false);
  const handleOpenSwipeDrawer = () => {
    setOpenSwipeDrawer(true);
  };
  const handleCloseSwipeDrawer = () => {
    setOpenSwipeDrawer(false);
  };
  return (
    <AppBar sx={{ backgroundColor: 'default.main' }}>
      <Navigation handleOpenSwipeDrawer={handleOpenSwipeDrawer} />
      <SwipeDrawer
        openSwipeDrawer={openSwipeDrawer}
        handleCloseSwipeDrawer={handleCloseSwipeDrawer}
      />
    </AppBar>
  );
};

export default Header;
