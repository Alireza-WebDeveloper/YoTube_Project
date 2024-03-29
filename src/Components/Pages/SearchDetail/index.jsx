import { Grid } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGetVideoSearch } from '../../../feature/videoSearchSlice';
import { useParams } from 'react-router-dom';
import VideoCard from '../../Videos/VideoCard';
import LoadingVideoCard from '../../LazyLoading/LoadingVideoCard';
import BreadCrumbsLink from '../../BreadCrumbsLink';
import { useContext } from 'react';
import { dataOfSideBarTab } from '../../../Utils';
import { ActiveSidebarContext } from '../../../Context/ActiveSideBarTab';
import { updateHistoryVideoSearch } from '../../../feature/videoSearchSlice';
const SearchDetail = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useParams();
  const { videoSearch } = useSelector((store) => store);
  const { updateActiveTab } = useContext(ActiveSidebarContext);
  const { videoHistory } = useSelector((store) => store);
  /**
   * اگر کلمه سرچ مورد نظر جز لیست های
   * باشه سریعا فعال شود sidebar
   */
  const indexOfInclusingQuerySearchToSideBar = dataOfSideBarTab.findIndex(
    ({ name }) => String(name).toLowerCase() === searchQuery
  );
  useEffect(() => {
    if (indexOfInclusingQuerySearchToSideBar !== -1) {
      updateActiveTab(
        dataOfSideBarTab[indexOfInclusingQuerySearchToSideBar]?.name
      );
    } else {
      updateActiveTab('');
    }
  }, [searchQuery]);
  useEffect(() => {
    dispatch(updateHistoryVideoSearch(videoHistory.listOfHistory));
  }, [videoSearch]);
  useEffect(() => {
    dispatch(fetchGetVideoSearch(searchQuery));
  }, [searchQuery]);
  const renderVideoCard = () => {
    return videoSearch.loading
      ? Array.from({ length: 50 }, (_, index) => {
          return (
            <Grid item xl={3} md={4} sm={6} xs={12} key={index}>
              <LoadingVideoCard />
            </Grid>
          );
        })
      : videoSearch.listOfVideos.map((video) => {
          return (
            <Grid
              item
              xl={3}
              md={4}
              sx={6}
              xs={12}
              key={video.id.videoId}
              className={'search_Detail-Page'}
            >
              <VideoCard video={video} />
            </Grid>
          );
        });
  };

  return (
    <Grid container pt={10} gap={3}>
      <Grid item xs={12}>
        {
          <BreadCrumbsLink
            ListOfLinks={[
              { name: 'home', to: '/' },
              { name: searchQuery, to: `/search/${searchQuery}` },
            ]}
          />
        }
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {renderVideoCard()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchDetail;
