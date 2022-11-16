import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ajaxApi from '../../Utils/api';

const fetchGetVideoDetailComments = createAsyncThunk(
  'fetchGet/VideoDetailComments',
  async (id, ThunkControl) => {
    const response = await ajaxApi.get(
      `/commentThreads?part=snippet&videoId=${id}`
    );
    return response.data.items;
  }
);

const initialState = {
  loading: false,
  error: '',
  listOfComments: [],
};

const videoDetailCommentsSlice = createSlice({
  name: 'videoDetailComments',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetVideoDetailComments.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGetVideoDetailComments.fulfilled, (state, action) => {
      state.loading = false;
      state.listOfComments = action.payload;
    });
  },
});

export { fetchGetVideoDetailComments };
export default videoDetailCommentsSlice.reducer;
