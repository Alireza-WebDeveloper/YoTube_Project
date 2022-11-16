import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ajaxApi from '../../Utils/api';

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
  extraReducers: (builder) => {
    builder.addCase(fetchGetVideoSearch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGetVideoSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.listOfVideos = action.payload;
    });
  },
});

export { fetchGetVideoSearch };

export default videoSearchSlice.reducer;
