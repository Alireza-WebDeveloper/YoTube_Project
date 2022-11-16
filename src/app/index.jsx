import { configureStore } from '@reduxjs/toolkit';
import videoSearchSlice from '../feature/videoSearchSlice';
import DetailOfChannelPersonSlice from '../feature/DetailOfChannelPersonSlice';
import videoChannelSlice from '../feature/videoChannelSlice';
import videoDetailSingleSlice from '../feature/videoDetailSingleSlice';
import videoDetailRelatedSlice from '../feature/videoDetailRelatedSlice';
import videoDetailCommentsSlice from '../feature/videoDetailCommentsSlice';
const store = configureStore({
  reducer: {
    videoSearch: videoSearchSlice,
    DetailOfChannelPerson: DetailOfChannelPersonSlice,
    videoChannel: videoChannelSlice,
    videoDetailSingle: videoDetailSingleSlice,
    videoDetailRelated: videoDetailRelatedSlice,
    videoDetailComments: videoDetailCommentsSlice,
  },
});

export default store;
