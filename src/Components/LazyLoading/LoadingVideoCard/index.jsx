import {
  Avatar,
  Box,
  Card,
  CardContent,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';

const LoadingVideoCard = () => {
  return (
    <>
      <Box className={'loading_Video-Card'}>
        <Card>
          <Skeleton
            sx={{ height: '38vh' }}
            animation="wave"
            variant="rectangular"
          />
          <CardContent>
            <ListItem
              sx={{
                alignItems: 'flex-start',
                textTransform: 'capitalize',
              }}
            >
              <ListItemAvatar>
                <Skeleton variant="circular">
                  <Avatar />
                </Skeleton>
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography>
                    <Skeleton
                      animation="wave"
                      variant="rounded"
                      sx={{ width: '50%' }}
                    />
                  </Typography>
                }
                secondary={
                  <Typography mt={2}>
                    <Skeleton
                      animation="wave"
                      variant="rounded"
                      sx={{ minHeight: '3vh' }}
                    />
                  </Typography>
                }
              />
            </ListItem>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default LoadingVideoCard;
