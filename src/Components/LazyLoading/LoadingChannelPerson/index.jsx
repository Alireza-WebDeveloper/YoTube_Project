import React from 'react';
import { Skeleton, Stack, List, ListItemAvatar,Typography ,Avatar,ListItemText,ListItem} from '@mui/material';
const LoadingChannelPerson = () => {
  return (
    <Stack flexGrow={1} display={'flex'} flexDirection={'column'}>
      <Stack flexGrow={1}>
        <Skeleton
          sx={{ height: '70vh' , maxHeight:'70vh', borderRadius: 1 }}
          animation="wave"
          variant="rectangular"
        />
      </Stack>
      <Stack>
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
                      sx={{ width: '25%' }}
                    />
                  </Typography>
                }
                secondary={
                  <Typography mt={2}>
                    <Skeleton
                      animation="wave"
                      variant="rounded"
                      sx={{ minHeight: '3vh',width: '50%' }}
                    />
                  </Typography>
                }
              />
            </ListItem>
      </Stack>
    </Stack>
  );
};

export default LoadingChannelPerson;
