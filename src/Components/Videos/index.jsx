import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import React from 'react';
import VideoCard from './VideoCard';

const Videos = ({ listOfVideos }) => {
  const renderVideoCard = () => {
    return listOfVideos.map((item) => {
      return <VideoCard item={item} />;
    });
  };
  return (
    <Grid container spacing={3}>
      {renderVideoCard()}
    </Grid>
  );
};

export default Videos;
