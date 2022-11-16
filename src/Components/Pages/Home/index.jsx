import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import SideBar from '../../SideBar';
import { fetchGetVideoSearch } from '../../../feature/videoSearchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { ActiveSidebarContext } from '../../../Context/ActiveSideBarTab';
import LoadingVideoCard from '../../LazyLoading/LoadingVideoCard';
import VideoCard from '../../Videos/VideoCard';
const Home = () => {
  const dispatch = useDispatch();
  const { activeTab, updateActiveTab } = useContext(ActiveSidebarContext);
  const { loading, listOfVideos } = useSelector((store) => store.videoSearch);
  const renderLoadingVideoCard = () => {
    return Array.from({ length: 50 }, (_, index) => {
      return (
        <Grid item xl={3} md={4} sm={6} xs={12} key={index}>
          <LoadingVideoCard />
        </Grid>
      );
    });
  };
  const renderVideoCard = () => {
    return listOfVideos.map((video) => {
      return (
        <Grid item xl={3} md={4} sx={6} xs={12} key={video.id.videoId}>
          <VideoCard video={video} />
        </Grid>
      );
    });
  };
  useEffect(() => {
    if (activeTab === '') {
      updateActiveTab('New');
    }
  }, []);
  useEffect(() => {
    dispatch(fetchGetVideoSearch(activeTab));
  }, [activeTab]);
  return (
    <Grid container pt={11} spacing={1}>
      <Grid item lg={1} xs={12}>
        <SideBar />
      </Grid>
      <Grid item lg={11} xs={12}>
        {loading ? (
          <Grid container spacing={3}>
            {renderLoadingVideoCard()}
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {renderVideoCard()}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
