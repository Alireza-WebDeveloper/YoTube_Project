import React from 'react';
import { CardActionArea, ImageList, ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import useBreakPoint from '../../Hook/useBreakPoint';
/**
 *
 * @param {*} param0 = Array['','','']
 * @returns
 */
const VideoGallery = ({ listOfVideos }) => {
  const { isMatching } = useBreakPoint();
  const renderGalleryOfVideos = () => {
    return listOfVideos.map((video) => {
      return (
        <Link
          key={video.id.videoId}
          to={`/video/${video.id.videoId}`}
          className={'video_Gallery--Item'}
        >
          <CardActionArea>
            <ImageListItem>
              <img
                style={{ borderRadius: 4 }}
                src={video?.snippet?.thumbnails?.high?.url}
                alt={'not found'}
                loading="lazy"
              />
              {/* <ImageListItemBar
                position="bottom"
                title={`${video.snippet.title.slice(0, 20)}...`}
              /> */}
            </ImageListItem>
          </CardActionArea>
        </Link>
      );
    });
  };
  const settingGridGallery = () => {
    return isMatching.xl && !isMatching.lg
      ? 3
      : isMatching.lg && !isMatching.sm
      ? 2
      : isMatching.sm
      ? 1
      : 4;
  };
  return (
    <ImageList
      gap={15}
      cols={settingGridGallery()}
      variant={'woven'}
      className={'video_Gallery'}
    >
      {renderGalleryOfVideos()}
    </ImageList>
  );
};

export default VideoGallery;
