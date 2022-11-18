import {
  List,
  ListItem,
  Stack,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { dataOfSideBarTab } from '../../Utils';
import { useContext } from 'react';
import { ActiveSidebarContext } from '../../Context/ActiveSideBarTab';
import { useNavigate } from 'react-router-dom';
/**
 *
 * @param {*} param0 = {A Function For Update Close SwipeDrawer}
 * @returns
 */
const SideBarDrawer = ({ handleCloseSwipeDrawer }) => {
  const { activeTab, updateActiveTab } = useContext(ActiveSidebarContext);
  const navigate = useNavigate();
  const renderSideBarTab = () => {
    return dataOfSideBarTab.map(({ id, icon, name }) => {
      return (
        <ListItem
          sx={{ ml: 2 }}
          key={id}
          onClick={() => {
            updateActiveTab(name);
            handleCloseSwipeDrawer();
            navigate('/');
          }}
        >
          <ListItemButton>
            <ListItemIcon
              sx={{
                color: `${activeTab === name ? 'primary.main' : 'default'}`,
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              sx={{
                color: `${activeTab === name ? 'secondary.main' : 'default'}`,
              }}
            >
              <Typography variant="body1">{name}</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      );
    });
  };

  return (
    <Stack>
      <Stack
        className="sideBar_Tab"
        flexDirection={'column'}
        sx={{ overflowY: 'auto' }}
        flexGrow={1}
        alignItems={'flex-start'}
        pl={1}
        gap={2}
      >
        <List>{renderSideBarTab()}</List>
      </Stack>
    </Stack>
  );
};

export default SideBarDrawer;
