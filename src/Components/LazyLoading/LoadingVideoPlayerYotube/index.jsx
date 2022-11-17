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

const LoadingVideoPlayerYotube = () => {
  return (
    <>
      <Box>
        <Card>
          <Skeleton
            sx={{ height: '90vh' }}
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

export default LoadingVideoPlayerYotube;
