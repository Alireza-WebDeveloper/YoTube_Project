import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ajaxApi from '../../Utils/api';
import { savedToHistory, removeFromHistory } from '../videoHistorySlice';
const initialState = {
  listOfVideos: [],
  loading: false,
  error: '',
};

const fetchGetVideoSearch = createAsyncThunk(
  'fetchGet/videoSearch',
  async (query, ThunkControl) => {
    const response = await ajaxApi.get(`/search?q=${query}`);
    return response.data.items;
  }
);

const videoSearchSlice = createSlice({
  name: 'videoSearchSlice',
  initialState,
  reducers: {
    updateHistoryVideoSearch: (state, action) => {
      state.listOfVideos.forEach((videoState) => {
        action.payload.forEach((videoHistory) => {
          if (videoState.id.videoId === videoHistory.id.videoId) {
            videoState.bookmarked = true;
          }
        });
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetVideoSearch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGetVideoSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.listOfVideos = action.payload;
    });
    // History
    builder.addCase(savedToHistory, (state, action) => {
      const videoTarget = state.listOfVideos.find(
        (video) => video.id.videoId === action.payload.id.videoId
      );
      if (!videoTarget) return;
      videoTarget.bookmarked = true;
    });
    builder.addCase(removeFromHistory, (state, action) => {
      const videoTarget = state.listOfVideos.find(
        (video) => video.id.videoId === action.payload
      );
      if (!videoTarget) return;
      videoTarget.bookmarked = false;
    });
  },
});

export const { updateHistoryVideoSearch } = videoSearchSlice.actions;

export { fetchGetVideoSearch };

export default videoSearchSlice.reducer;
