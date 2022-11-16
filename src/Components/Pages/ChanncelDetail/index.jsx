import React, { useContext, useEffect } from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetDetailOfChannelPerson } from '../../../feature/DetailOfChannelPersonSlice';
import { ActiveSidebarContext } from '../../../Context/ActiveSideBarTab';
import { useParams } from 'react-router-dom';
import ChannelCart from '../../ChannelCart';
import ChannelTab from '../../ChannelTab';
import { fetchGetVideosChannel } from '../../../feature/videoChannelSlice';
import VideoGallery from '../../VideoGallery';
const ChannelDetail = () => {
  const { updateActiveTab } = useContext(ActiveSidebarContext);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { DetailOfChannelPerson, videoChannel } = useSelector((store) => store);

  useEffect(() => {
    updateActiveTab('');
    dispatch(fetchGetDetailOfChannelPerson(id));
    dispatch(fetchGetVideosChannel(id));
  }, []);
  if (DetailOfChannelPerson.loading) return <Stack pt={10}>loading..</Stack>;
  if (!DetailOfChannelPerson.dataOfChannel) return null;

  return (
    <Container>
      <Grid container pt={10} spacing={2}>
        <Grid item xs={12}>
          <ChannelCart dataOfChannel={DetailOfChannelPerson.dataOfChannel} />
        </Grid>
        <Grid item xs={12}>
          {/* <ChannelTab
          listOfVideos={videoChannel.listOfVideos}
          loading={videoChannel.loading}
        /> */}
          <Stack>
            <Typography
              variant={'h2'}
              textTransform={'capitalize'}
              gutterBottom
            >
              Channel
            </Typography>
          </Stack>
          <VideoGallery listOfVideos={videoChannel.listOfVideos} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChannelDetail;
