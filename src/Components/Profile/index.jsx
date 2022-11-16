import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { SourceProfile } from '../../Utils/index';
const Profile = () => {
  return (
    <>
      <IconButton>
        <Avatar variant="rounded" src={SourceProfile}></Avatar>
      </IconButton>
    </>
  );
};

export default Profile;
