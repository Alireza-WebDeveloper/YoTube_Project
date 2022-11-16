import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ajaxApi from '../../Utils/api';

const initialState = {
  listOfVideos: [],
  loading: false,
  error: '',
};

const fetchGetVideosChannel = createAsyncThunk(
  'fetchGet/videoChannel',
  async (id, ThunkControl) => {
    const response = await ajaxApi.get(`/search?channelId=${id}&order=date`);
    return response.data.items;
  }
);

const videoChannelSlice = createSlice({
  name: 'videoChannel',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetVideosChannel.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGetVideosChannel.fulfilled, (state, action) => {
      state.loading = false;
      state.listOfVideos = action.payload;
    });
  },
});

export { fetchGetVideosChannel };

export default videoChannelSlice.reducer;
