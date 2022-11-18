import React, { useContext, useEffect } from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetDetailOfChannelPerson } from '../../../feature/DetailOfChannelPersonSlice';
import { ActiveSidebarContext } from '../../../Context/ActiveSideBarTab';
import { useParams } from 'react-router-dom';
import ChannelCart from '../../ChannelCart';
import { fetchGetVideosChannel } from '../../../feature/videoChannelSlice';
import VideoGallery from '../../VideoGallery';
import LoadingChannelPerson from '../../LazyLoading/LoadingChannelPerson';
import LoadingGalleryCard from '../../LazyLoading/LoadingGalleryCard';
const ChannelDetail = () => {
  const dispatch = useDispatch();
  const { updateActiveTab } = useContext(ActiveSidebarContext);
  const { id } = useParams();
  const { DetailOfChannelPerson, videoChannel } = useSelector((store) => store);
  useEffect(() => {
    updateActiveTab('');
    dispatch(fetchGetDetailOfChannelPerson(id));
    dispatch(fetchGetVideosChannel(id));
  }, []);
  /**
   *
   * @returns  ChannelCart || LoadingChannelPerson
   */
  const renderChannelPerson = () => {
    return DetailOfChannelPerson?.loading ? (
      <LoadingChannelPerson />
    ) : !DetailOfChannelPerson?.dataOfChannel ? null : (
      <ChannelCart dataOfChannel={DetailOfChannelPerson.dataOfChannel} />
    );
  };
  /**
   *
   * @returns VideoGallery || LoadingGallery
   */
  const renderVideoChannel = () => {
    return videoChannel.loading ? (
      <LoadingGalleryCard />
    ) : (
      <VideoGallery listOfVideos={videoChannel.listOfVideos} />
    );
  };

  return (
    <Container>
      <Grid container pt={10} spacing={2} className={'channel_Detail-Page'}>
        <Grid item xs={12}>
          {renderChannelPerson()}
        </Grid>
        <Grid item xs={12}>
          <Stack>
            <Typography
              variant={'h2'}
              textTransform={'capitalize'}
              gutterBottom
            >
              Channel
            </Typography>
          </Stack>
          {renderVideoChannel()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChannelDetail;
