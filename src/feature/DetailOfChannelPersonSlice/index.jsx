import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ajaxApi from '../../Utils/api';

const initialState = {
  dataOfChannel: null,
  loading: false,
  error: '',
};

const fetchGetDetailOfChannelPerson = createAsyncThunk(
  'fetchGet/DetailOfChannelPerson',
  async (id, ThunkControl) => {
    const response = await ajaxApi.get(`/channels?id=${id}`);
    return response.data.items[0];
  }
);

const DetailOfChannelPersonSlice = createSlice({
  name: 'DetailOfChannelPerson',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetDetailOfChannelPerson.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(
      fetchGetDetailOfChannelPerson.fulfilled,
      (state, action) => {
        state.loading = false;
        state.dataOfChannel = action.payload;
      }
    );
  },
});

export { fetchGetDetailOfChannelPerson };

export default DetailOfChannelPersonSlice.reducer;
