import React from 'react';
import {
  CardMedia,
  ListItem,
  ListItemAvatar,
  Stack,
  Avatar,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import { IconChecked } from '../../Utils';
const ChannelCart = ({ dataOfChannel }) => {
  return (
    <Stack flexGrow={1} p={0}>
      <CardMedia
        component={'img'}
        src={dataOfChannel?.brandingSettings?.image?.bannerExternalUrl}
        loading="lazy"
        alt={'not be found'}
        sx={{
          objectFit: 'fill',
          maxHeight: '70vh',
          borderRadius: 1,
          m: 'auto',
        }}
      />
      <ListItem>
        <ListItemAvatar>
          <Avatar src={dataOfChannel?.snippet?.thumbnails?.high.url} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="h5">
              {dataOfChannel.snippet.title}
              {IconChecked}
            </Typography>
          }
          secondary={
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Typography variant="subtitle1">
                {new Intl.NumberFormat(navigator.language).format(
                  dataOfChannel.statistics.subscriberCount
                )}
              </Typography>
              <Typography sx={{ textTransform: 'capitalize' }}>
                {' '}
                subscribers
              </Typography>
            </Box>
          }
        />
      </ListItem>
    </Stack>
  );
};

export default ChannelCart;
