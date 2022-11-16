import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ajaxApi from '../../Utils/api';

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
  extraReducers: (builder) => {
    builder.addCase(fetchGetVideoDetailRelated.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGetVideoDetailRelated.fulfilled, (state, action) => {
      state.loading = false;
      state.listOfVideos = action.payload;
    });
  },
});

export { fetchGetVideoDetailRelated };
export default videoDetailRelatedSlice.reducer;
