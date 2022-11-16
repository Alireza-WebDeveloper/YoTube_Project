import { Stack } from '@mui/material';
import React from 'react';
import { CircularProgress } from '@mui/material';
const LoadingComments = () => {
  return (
    <Stack pt={10}>
      <CircularProgress
        sx={{ color: (theme) => theme.palette.primary, m: 'auto' }}
        size={100}
      />
    </Stack>
  );
};

export default LoadingComments;
