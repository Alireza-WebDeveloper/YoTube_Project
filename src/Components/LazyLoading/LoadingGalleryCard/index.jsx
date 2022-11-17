import { Stack } from '@mui/material';
import React from 'react';
import { CircularProgress } from '@mui/material';
const LoadingGalleryCard = () => {
  return (
    <Stack pt={10} className="loading_Gallery-Card">
      <CircularProgress
        sx={{ color: (theme) => theme.palette.primary, m: 'auto' }}
        size={100}
      />
    </Stack>
  );
};

export default LoadingGalleryCard;
