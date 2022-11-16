import {
  Card,
  Stack,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  CardActions,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Avatar,
  Button,
} from '@mui/material';
import React from 'react';
import video1 from './Haamin.mp4';
import {
  IconLike,
  IconDislike,
  IconShare,
  IconDropDown,
  IconDropUp,
  IconComment,
} from '../../Utils/index';
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { useMemo } from 'react';
const VideoPlayerYotube = ({ dataOfVideoSingleDetail }) => {
  const [showmore, setShowMore] = useState(false);
  const updateShowMore = () => {
    setShowMore(!showmore);
  };
  const renderCardContent = useMemo(() => {
    return (
      <CardContent>
        <Stack
          flexGrow={1}
          component={'div'}
          display={'flex'}
          flexDirection={'column'}
          gap={1}
        >
          <Stack>
            <Typography variant={'h4'} textTransform={'capitalize'}>
              {dataOfVideoSingleDetail.snippet.title}
            </Typography>
          </Stack>
          <Stack
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexWrap={'wrap'}
            alignContent={'center'}
          >
            <Box>
              <Typography>
                {dataOfVideoSingleDetail.statistics.viewCount} Views.
                {Math.floor(Math.random() * 10)} month
              </Typography>
            </Box>
            <Box
              display={'flex'}
              gap={2}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Box>
                <IconButton>{IconLike} </IconButton>
                <Typography variant={'body2'} component={'span'}>
                  {new Intl.NumberFormat(navigator.language).format(
                    dataOfVideoSingleDetail.statistics.likeCount
                  )}
                </Typography>
              </Box>
              <Box>
                <IconButton>{IconDislike}</IconButton>
                <Typography variant={'body2'} component={'span'}>
                  0
                </Typography>
              </Box>
              <Box>
                <IconButton>{IconShare}</IconButton>
              </Box>
              <Box>
                <IconButton>{IconComment}</IconButton>
                <Typography variant={'body2'} component={'span'}>
                  {new Intl.NumberFormat(navigator.language).format(
                    dataOfVideoSingleDetail?.statistics?.commentCount
                  )}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack>
          <ListItem
            sx={{
              alignItems: 'flex-start',
              textTransform: 'capitalize',
            }}
          >
            <ListItemAvatar>
              <Avatar src />
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography variant="body1" component={'h1'}>
                  {dataOfVideoSingleDetail.snippet.channelTitle}
                </Typography>
              }
              secondary={
                <>
                  <Typography variant="subtitle2" color="primary">
                    {Math.floor(Math.random() * 3 * 5)}k subscribers
                  </Typography>
                  <Typography>
                    {dataOfVideoSingleDetail.snippet.description.slice(0, 270)}
                  </Typography>
                </>
              }
            />
          </ListItem>
        </Stack>
      </CardContent>
    );
  }, [dataOfVideoSingleDetail]);
  return (
    <Stack className="videoPlayer_Yotube">
      <Card>
        <CardMedia
          component="video"
          image={`https://www.youtube.com/watch?v=k_AN49fA9g0`}
          autoPlay
          controls
        />
        {renderCardContent}
        <CardActions>
          <Stack flexGrow={1} flexDirection={'column'} gap={2}>
            <Stack>
              <Box>
                <Button
                  onClick={updateShowMore}
                  variant="outlined"
                  color="secondary"
                  endIcon={showmore ? IconDropUp : IconDropDown}
                  size="large"
                >
                  show more
                </Button>
              </Box>
              <Collapse in={showmore}>
                <Box p={2} sx={{ textTransform: 'capitalize' }}>
                  <Typography variant="body2">
                    {dataOfVideoSingleDetail?.snippet?.description}
                  </Typography>
                </Box>
              </Collapse>
            </Stack>
          </Stack>
        </CardActions>
      </Card>
    </Stack>
  );
};

export default VideoPlayerYotube;
