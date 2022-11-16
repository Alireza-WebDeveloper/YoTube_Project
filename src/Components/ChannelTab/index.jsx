import { Typography } from '@mui/material';
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Grid } from '@mui/material';
import LoadingVideoCard from '../LazyLoading/LoadingVideoCard';
import VideoGallery from '../VideoGallery';
const ChannelTab = ({ listOfVideos, loading }) => {
  const renderLoadingVideoCard = () => {
    return Array.from({ length: 50 }, (_, index) => {
      return (
        <Grid item xl={3} md={4} sm={6} xs={12}>
          <LoadingVideoCard />
        </Grid>
      );
    });
  };
  return (
    <Tabs
      defaultActiveKey="video"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab
        eventKey="video"
        title={
          <Typography variant="h4" textTransform={'capitalize'}>
            video channel
          </Typography>
        }
      >
        <VideoGallery listOfVideos={listOfVideos} />
      </Tab>
      <Tab
        eventKey="about"
        title={
          <Typography variant="h4" textTransform={'capitalize'}>
            about
          </Typography>
        }
      >
        Nothing!
      </Tab>
    </Tabs>
  );
};

export default ChannelTab;
