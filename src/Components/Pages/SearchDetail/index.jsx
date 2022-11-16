import { Grid, Stack, Breadcrumbs, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGetVideoSearch } from '../../../feature/videoSearchSlice';
import { useParams } from 'react-router-dom';
import VideoCard from '../../Videos/VideoCard';
import LoadingVideoCard from '../../LazyLoading/LoadingVideoCard';
import { Link } from 'react-router-dom';
import BreadCrumbsLink from '../../BreadCrumbsLink';
import { useContext } from 'react';
import { dataOfSideBarTab } from '../../../Utils';
import { ActiveSidebarContext } from '../../../Context/ActiveSideBarTab';
const SearchDetail = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useParams();
  const { videoSearch } = useSelector((store) => store);
  const { updateActiveTab } = useContext(ActiveSidebarContext);
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
    dispatch(fetchGetVideoSearch(searchQuery));
  }, [searchQuery]);
  const renderVideoCard = () => {
    return videoSearch.listOfVideos.map((video) => {
      return (
        <Grid item xl={3} md={4} sx={6} xs={12} key={video.id.videoId}>
          <VideoCard video={video} />
        </Grid>
      );
    });
  };
  const renderLoadingVideoCard = () => {
    return Array.from({ length: 50 }, (_, index) => {
      return (
        <Grid item xl={3} md={4} sm={6} xs={12} key={index}>
          <LoadingVideoCard />
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
        {videoSearch.loading ? (
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

export default SearchDetail;
