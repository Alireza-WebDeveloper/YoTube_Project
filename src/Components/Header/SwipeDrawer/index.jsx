import { Box, SwipeableDrawer, Stack, IconButton } from '@mui/material';
import React from 'react';
import { IconClose } from '../../../Utils';
import SearchBar from '../../SearchBar';
import SideBarDrawer from '../../SideBarDrawer';

const SwipeDrawer = ({ openSwipeDrawer, handleCloseSwipeDrawer }) => {
  return (
    <Box>
      <SwipeableDrawer open={openSwipeDrawer} onClose={handleCloseSwipeDrawer}>
        <Stack p={2} gap={1}>
          <Box>
            <IconButton color="secondary" onClick={handleCloseSwipeDrawer}>
              {IconClose}
            </IconButton>
          </Box>
          <Box>
            <SearchBar />
          </Box>
          <Box>
            <SideBarDrawer handleCloseSwipeDrawer={handleCloseSwipeDrawer} />
          </Box>
        </Stack>
      </SwipeableDrawer>
    </Box>
  );
};

export default SwipeDrawer;
