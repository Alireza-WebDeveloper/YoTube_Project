import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Paper,
  Stack,
  ListItemText,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import React from 'react';
import { IconDislike, IconLike } from '../../Utils';
/**
 *
 * @param {*} param0 = {video:'',text:'',....}
 * @returns Comment Of Videos
 */
const CommentCard = ({ comment }) => {
  return (
    <Paper>
      <Stack flexGrow={1} className={'Comment_Card'}>
        <List>
          <ListItem sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <ListItemAvatar>
              {/* <Link
                to={`/channel/${comment?.snippet?.topLevelComment?.snippet?.authorChannelId.value}`}
              > */}
              <IconButton>
                <Avatar
                  src={
                    comment?.snippet?.topLevelComment?.snippet
                      ?.authorProfileImageUrl || ''
                  }
                />
              </IconButton>
              {/* </Link> */}
            </ListItemAvatar>

            <ListItemText
              primary={
                <Box display={'flex'} gap={1} alignItems={'center'}>
                  <Typography variant={'body1'} textTransform={'capitalize'}>
                    {
                      comment?.snippet?.topLevelComment?.snippet
                        ?.authorDisplayName
                    }
                  </Typography>
                  <Typography variant={'body2'} textTransform={'capitalize'}>
                    {' '}
                    {new Intl.DateTimeFormat(navigator.language).format(
                      new Date(
                        `${comment.snippet.topLevelComment.snippet.publishedAt}`
                      )
                    )}
                  </Typography>
                </Box>
              }
              secondary={
                <Stack flexGrow={1} gap={2} flexDirection={'column'}>
                  <Typography>
                    {comment?.snippet?.topLevelComment?.snippet?.textDisplay.slice(
                      0,
                      250
                    )}
                  </Typography>
                  <Stack display={'flex'} flexDirection={'row'} gap={1}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography
                        variant={'body1'}
                        textTransform={'capitalize'}
                      >
                        {Math.floor(Math.random() * 100)}
                      </Typography>
                      <IconButton>{IconLike}</IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography
                        variant={'body1'}
                        textTransform={'capitalize'}
                      >
                        {Math.floor(Math.random() * 100)}
                      </Typography>
                      <IconButton>{IconDislike}</IconButton>
                    </Box>
                  </Stack>
                </Stack>
              }
            />
          </ListItem>
        </List>
      </Stack>
    </Paper>
  );
};

export default CommentCard;
