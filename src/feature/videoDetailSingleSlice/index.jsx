import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ajaxApi from '../../Utils/api';

const initialState = {
  loading: false,
  error: '',
  dataOfVideoSingleDetail: null,
};

const fetchGetVideoDetailSingle = createAsyncThunk(
  'fetchGet/videoDetailSingle',
  async (id, ThunkControl) => {
    const response = await ajaxApi(
      `/videos?statistics&contentDetails&id=${id}`
    );
    return response.data.items[0];
  }
);

const videoDetailSingleSlice = createSlice({
  name: 'videoDetailSingle',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetVideoDetailSingle.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGetVideoDetailSingle.fulfilled, (state, action) => {
      state.loading = false;
      state.dataOfVideoSingleDetail = action.payload;
    });
  },
});

export { fetchGetVideoDetailSingle };

export default videoDetailSingleSlice.reducer;
