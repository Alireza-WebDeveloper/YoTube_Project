import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import SideBar from '../../SideBar';
import {
  fetchGetVideoSearch,
  updateHistoryVideoSearch,
} from '../../../feature/videoSearchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { ActiveSidebarContext } from '../../../Context/ActiveSideBarTab';
import LoadingVideoCard from '../../LazyLoading/LoadingVideoCard';
import VideoCard from '../../Videos/VideoCard';
const Home = () => {
  const dispatch = useDispatch();
  const { activeTab, updateActiveTab } = useContext(ActiveSidebarContext);
  const { loading, listOfVideos } = useSelector((store) => store.videoSearch);
  const { videoSearch } = useSelector((store) => store);
  const { videoHistory } = useSelector((store) => store);
  useEffect(() => {
    dispatch(updateHistoryVideoSearch(videoHistory.listOfHistory));
  }, [videoSearch]);
  useEffect(() => {
    if (activeTab === '') {
      updateActiveTab('New');
    }
  }, []);
  useEffect(() => {
    dispatch(fetchGetVideoSearch(activeTab));
  }, [activeTab]);
  /**
   *
   * @returns VideoCards || Loading(Fetch)
   */
  const renderVideoCard = () => {
    return loading
      ? Array.from({ length: 50 }, (_, index) => {
          return (
            <Grid item xl={3} md={4} sm={6} xs={12} key={index}>
              <LoadingVideoCard />
            </Grid>
          );
        })
      : listOfVideos.map((video) => {
          return (
            <Grid item xl={3} md={4} sx={6} xs={12} key={video.id.videoId}>
              <VideoCard video={video} />
            </Grid>
          );
        });
  };
  return (
    <Grid container pt={11} spacing={1} className="home-Page">
      <Grid item lg={1} xs={12}>
        <SideBar />
      </Grid>
      <Grid item lg={11} xs={12}>
        <Grid container spacing={3}>
          {renderVideoCard()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
