import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import VideoCard from '../../Videos/VideoCard';
import { useContext } from 'react';
import { ActiveSidebarContext } from '../../../Context/ActiveSideBarTab';
import { useEffect } from 'react';
const HistoryDetail = () => {
  const { videoHistory } = useSelector((store) => store);
  const { updateActiveTab } = useContext(ActiveSidebarContext);
  useEffect(() => {
    updateActiveTab('');
  }, []);
  /**
   *
   * @returns VideoHistory || (Not Found = 0 History)
   */
  const renderVideoHistory = () => {
    return videoHistory.listOfHistory.length === 0 ? (
      <Grid item xs={12}>
        <Stack pt={10}>
          <Typography variant={'h2'} textAlign={'center'}>
            Not Found Any History!
          </Typography>
        </Stack>
      </Grid>
    ) : (
      videoHistory.listOfHistory.map((video) => {
        return (
          <Grid item xl={3} md={4} sx={6} xs={12} key={video.id.videoId}>
            <VideoCard video={video} />
          </Grid>
        );
      })
    );
  };
  return (
    <Grid container pt={10} spacing={3}>
      {renderVideoHistory()}
    </Grid>
  );
};

export default HistoryDetail;
