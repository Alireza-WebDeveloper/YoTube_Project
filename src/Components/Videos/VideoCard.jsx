import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Stack,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemAvatar,
  ListItem,
  Avatar,
  CardActionArea,
} from '@mui/material';
import { Logo } from '../../Utils';
import { NavLink } from 'react-router-dom';
import SettingVideoGrid from '../../Utils/index';
const VideoCard = ({ video }) => {
  return (
    <Card sx={{ height: '60vh' }}>
      <NavLink to={`/video/${video.id.videoId}`}>
        <CardActionArea>
          <CardMedia
            sx={{ height: '36vh' }}
            src={
              video?.snippet?.thumbnails.high.url ||
              'https://wallpapercave.com/fuwp/uwp2945453.jpeg'
            }
            lazy="loading"
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
                  {video.snippet.description.slice(0, 50)}
                </Typography>
              </>
            }
          />
        </ListItem>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
