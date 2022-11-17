import { configureStore } from '@reduxjs/toolkit';
import videoSearchSlice from '../feature/videoSearchSlice';
import DetailOfChannelPersonSlice from '../feature/DetailOfChannelPersonSlice';
import videoChannelSlice from '../feature/videoChannelSlice';
import videoDetailSingleSlice from '../feature/videoDetailSingleSlice';
import videoDetailRelatedSlice from '../feature/videoDetailRelatedSlice';
import videoDetailCommentsSlice from '../feature/videoDetailCommentsSlice';
import videoHistorySlice from '../feature/videoHistorySlice';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
const persistConfig = {
  key: 'videoHistory',
  version: 1,
  storage,
  whitelist: ['videoHistory'],
};
const reducer = combineReducers({
  videoSearch: videoSearchSlice,
  DetailOfChannelPerson: DetailOfChannelPersonSlice,
  videoChannel: videoChannelSlice,
  videoDetailSingle: videoDetailSingleSlice,
  videoDetailRelated: videoDetailRelatedSlice,
  videoDetailComments: videoDetailCommentsSlice,
  videoHistory: videoHistorySlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
