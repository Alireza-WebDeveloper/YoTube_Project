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
  console.log(dataOfChannel?.brandingSettings?.image?.bannerExternalUrl);
  return (
    <Stack flexGrow={1} p={0}>
      <CardMedia
        component={'img'}
        src={
          dataOfChannel?.brandingSettings?.image?.bannerExternalUrl ||
          'https://img.freepik.com/free-psd/3d-rounded-square-with-glossy-youtube-logo_125540-1545.jpg?w=900&t=st=1668606049~exp=1668606649~hmac=529a27bb6d33fb11b7d7a43621b31c3e732c56ba5f2a6615d5b62b21fc83a22e'
        }
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
