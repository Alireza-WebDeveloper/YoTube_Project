import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  ListItemText,
  Typography,
  ListItemAvatar,
  ListItem,
  Avatar,
  CardActionArea,
  Button,
  Stack,
} from '@mui/material';
import { Logo, IconHistory } from '../../Utils';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { makeStyles } from '@mui/styles';
import {
  savedToHistory,
  removeFromHistory,
} from '../../feature/videoHistorySlice';
/**
 *
 * @param {*} param0 A Object{} Of Detail Video
 * @returns
 */

const useStyles = makeStyles((theme) => ({
  success: {
    textTransform: 'capitalize',
    fontFamily: theme.typography.h5.fontFamily,
  },
  error: {
    textTransform: 'capitalize',
    fontFamily: theme.typography.h5.fontFamily,
  },
}));

const VideoCard = ({ video }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSavedToHistory = () => {
    toast.success(`Add to history`, {
      autoClose: 1000,
      position: 'top-center',
      closeOnClick: true,
      draggable: true,
      pauseOnHover: false,
      className: classes.success,
    });
    dispatch(savedToHistory(video));
  };
  const handleRemoveFromHistory = () => {
    dispatch(removeFromHistory(video?.id?.videoId));
    toast.error(`Remove From history`, {
      autoClose: 1000,
      position: 'top-center',
      closeOnClick: true,
      draggable: true,
      pauseOnHover: false,
      className: classes.success,
    });
  };

  const renderHistoryButton = () => {
    return video?.bookmarked === true ? (
      <Button
        size={'large'}
        color="primary"
        variant="contained"
        onClick={handleRemoveFromHistory}
        endIcon={IconHistory}
      >
        <Typography variant={'body1'}>remove</Typography>
      </Button>
    ) : (
      <Button
        size={'large'}
        color="secondary"
        variant={'contained'}
        endIcon={IconHistory}
        onClick={handleSavedToHistory}
      >
        <Typography variant={'body1'}>add</Typography>
      </Button>
    );
  };

  return (
    <Card
      sx={{ height: '61vh', position: 'relative' }}
      className={'video_Card'}
    >
      <NavLink to={`/video/${video.id.videoId}`}>
        <CardActionArea>
          <CardMedia
            sx={{ height: '36vh' }}
            src={
              video?.snippet?.thumbnails.high.url ||
              'https://wallpapercave.com/fuwp/uwp2945453.jpeg'
            }
            loading="lazy"
            component={'img'}
          />
        </CardActionArea>
      </NavLink>
      <CardContent>
        <ListItem
          sx={{
            alignItems: 'flex-start',
            textTransform: 'capitalize',
          }}
        >
          <NavLink to={`/channel/${video.snippet.channelId}`}>
            <ListItemAvatar>
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                  ':hover': { backgroundColor: 'secondary.main' },
                }}
              >
                {Logo}
              </Avatar>
            </ListItemAvatar>
          </NavLink>
          <ListItemText
            primary={
              <Typography variant="body1" component={'h1'}>
                {video.snippet.channelTitle}
              </Typography>
            }
            secondary={
              <>
                <Typography variant="subtitle2">
                  {video.snippet.description.slice(0, 30)}
                </Typography>
              </>
            }
          />
        </ListItem>
        <Stack position={'absolute'} bottom={10} flexGrow={1} mt={3}>
          {renderHistoryButton()}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
