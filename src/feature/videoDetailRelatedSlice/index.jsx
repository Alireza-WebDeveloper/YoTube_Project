import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ajaxApi from '../../Utils/api';
import { savedToHistory, removeFromHistory } from '../videoHistorySlice';
const fetchGetVideoDetailRelated = createAsyncThunk(
  'fetchGet/VideoDetailRelated',
  async (id, ThunkControl) => {
    const response = await ajaxApi.get(
      `/search?part=snippet&relatedToVideoId=${id}`
    );
    return response.data.items;
  }
);

const initialState = {
  loading: false,
  error: '',
  listOfVideos: [],
};

const videoDetailRelatedSlice = createSlice({
  name: 'videoDetailRelated',
  initialState,
  reducers: {
    updateHistoryVideoRelated: (state, action) => {
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
    builder.addCase(fetchGetVideoDetailRelated.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGetVideoDetailRelated.fulfilled, (state, action) => {
      state.loading = false;
      state.listOfVideos = action.payload;
    });
    builder.addCase(savedToHistory, (state, action) => {
      console.log('Second');
      const videoTarget = state.listOfVideos.find(
        (video) => video.id.videoId === action.payload.id.videoId
      );
      if (!videoTarget) return;
      videoTarget.bookmarked = true;
    });
    builder.addCase(removeFromHistory, (state, action) => {
      console.log('Third');
      const videoTarget = state.listOfVideos.find(
        (video) => video.id.videoId === action.payload
      );
      if (!videoTarget) return;
      videoTarget.bookmarked = false;
    });
  },
});

export const { updateHistoryVideoRelated } = videoDetailRelatedSlice.actions;

export { fetchGetVideoDetailRelated };
export default videoDetailRelatedSlice.reducer;
