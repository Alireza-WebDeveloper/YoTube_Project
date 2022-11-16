import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGetVideoDetailSingle } from '../../../feature/videoDetailSingleSlice';
import VideoPlayerYotube from '../../VideoPlayerYotube';
import { useContext } from 'react';
import { ActiveSidebarContext } from '../../../Context/ActiveSideBarTab';
import { fetchGetVideoDetailRelated } from '../../../feature/videoDetailRelatedSlice';
import VideoCard from '../../Videos/VideoCard';
import { fetchGetVideoDetailComments } from '../../../feature/videoDetailCommentsSlice';
import CommentCard from '../../CommentCard';
const VideoDetail = () => {
  const dispatch = useDispatch();
  const { activeTab, updateActiveTab } = useContext(ActiveSidebarContext);
  const { id } = useParams();
  const { videoDetailSingle, videoDetailRelated, videoDetailComments } =
    useSelector((store) => store);

  useEffect(() => {
    updateActiveTab('');
    dispatch(fetchGetVideoDetailSingle(id));
    dispatch(fetchGetVideoDetailRelated(id));
    dispatch(fetchGetVideoDetailComments(id));
  }, [id]);
  if (videoDetailSingle?.loading || !videoDetailSingle.dataOfVideoSingleDetail)
    return <Stack pt={10}>loading...</Stack>;
  const renderVideoCartRelated = () => {
    return videoDetailRelated.listOfVideos.map((video) => {
      return (
        <Grid item lg={12} md={4} sm={6} xs={12} key={video.id.videoId}>
          <VideoCard video={video} />
        </Grid>
      );
    });
  };
  const renderVideoComments = () => {
    return videoDetailComments.listOfComments.map((comment) => {
      return <CommentCard comment={comment} key={comment?.snippet?.videoId} />;
    });
  };
  return (
    <Grid container pt={10} spacing={2}>
      <Grid item lg={9} xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <VideoPlayerYotube
              dataOfVideoSingleDetail={
                videoDetailSingle.dataOfVideoSingleDetail
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Stack>
              <Typography
                variant={'h4'}
                textTransform={'capitalize'}
                gutterBottom
              >
                comments
              </Typography>
            </Stack>
            <Stack flexGrow={1} flexDirection={'column'} gap={2}>
              {renderVideoComments()}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={3} xs={12}>
        <Grid container spacing={4}>
          {renderVideoCartRelated()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VideoDetail;
