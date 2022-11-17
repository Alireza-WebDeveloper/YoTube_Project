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
import LoadingVideoCard from '../../LazyLoading/LoadingVideoCard';
import LoadingComments from '../../LazyLoading/LoadingComments';
import LoadingVideoPlayerYotube from '../../LazyLoading/LoadingVideoPlayerYotube';
const VideoDetail = () => {
  const dispatch = useDispatch();
  const { updateActiveTab } = useContext(ActiveSidebarContext);
  const { id } = useParams();
  const { videoDetailSingle, videoDetailRelated, videoDetailComments } =
    useSelector((store) => store);

  useEffect(() => {
    updateActiveTab('');
    dispatch(fetchGetVideoDetailSingle(id));
    dispatch(fetchGetVideoDetailRelated(id));
    dispatch(fetchGetVideoDetailComments(id));
  }, [id]);

  const renderVideoCartRelated = () => {
    return videoDetailRelated.loading
      ? Array.from({ length: 50 }, (_, index) => {
          return (
            <Grid item lg={12} md={4} sm={6} xs={12} key={index} className={"video_Detail-Page"}>
              <LoadingVideoCard />
            </Grid>
          );
        })
      : videoDetailRelated.listOfVideos.map((video) => {
          return (
            <Grid item lg={12} md={4} sm={6} xs={12} key={video.id.videoId}>
              <VideoCard video={video} />
            </Grid>
          );
        });
  };
  const renderVideoComments = () => {
    return videoDetailComments.loading ? (
      <LoadingComments />
    ) : (
      videoDetailComments.listOfComments.map((comment) => {
        return (
          <CommentCard comment={comment} key={comment?.snippet?.videoId} />
        );
      })
    );
  };

  const renderVideoYotube = () => {
    return videoDetailSingle.loading ? (
      <LoadingVideoPlayerYotube />
    ) : !videoDetailSingle.dataOfVideoSingleDetail ? null : (
      <VideoPlayerYotube
        dataOfVideoSingleDetail={videoDetailSingle.dataOfVideoSingleDetail}
      />
    );
  };
  return (
    <Grid container pt={10} spacing={2}>
      <Grid item lg={9} xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {renderVideoYotube()}
          </Grid>
          <Grid item xs={12}>
            <Stack>
              <Typography
                variant={'h3'}
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
