import { IconButton, List, Stack, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useMemo, useState } from 'react';
import { dataOfSideBarTab } from '../../Utils';

import * as Icons from 'react-icons/md';
import { useContext } from 'react';
import { ActiveSidebarContext } from '../../Context/ActiveSideBarTab';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  sideBar: {
    [theme.breakpoints.up('lg')]: {
      position: 'fixed !important',
      height: '90vh !important',
      overflowY: 'auto !important',
      overflowX: 'none !important',
      paddingLeft: 2,
      paddingRight: 30,
    },
    [theme.breakpoints.down('lg')]: {
      position: 'relative !important',
      display: 'flex !important',
      flexDirection: 'row !important',
      justifyContent: 'space-evenly !important',
      height: 'auto !important',
      overflowX: 'auto !important',
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.down('md')]: {
      position: 'relative !important',
      display: 'flex !important',
      flexDirection: 'row !important',
      justifyContent: 'flex-start !important',
      height: 'auto !important',
      overflowX: 'auto !important',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}));
const SideBar = () => {
  const { activeTab, updateActiveTab } = useContext(ActiveSidebarContext);
  const clases = useStyles();
  const renderSideBarTab = useMemo(() => {
    return dataOfSideBarTab.map(({ id, icon, name }) => {
      return (
        <Box className="sideBar_Tab--Item" key={id}>
          <Tooltip
            title={<Typography variant="body1">{name}</Typography>}
            placement="right-start"
            arrow
            color={`${activeTab === name ? 'primary' : 'default'}`}
          >
            <IconButton onClick={() => updateActiveTab(name)}>
              {icon}
            </IconButton>
          </Tooltip>
        </Box>
      );
    });
  }, [activeTab]);

  return (
    <Stack>
      <Stack
        className={`sideBar_Tab ${clases.sideBar}`}
        flexDirection={'column'}
        flexGrow={1}
        alignItems={'flex-start'}
        pl={1}
        gap={2}
      >
        {renderSideBarTab}
      </Stack>
    </Stack>
  );
};

export default SideBar;
