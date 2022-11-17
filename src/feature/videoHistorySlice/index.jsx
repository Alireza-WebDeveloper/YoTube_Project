import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listOfHistory: [],
};

const videoHistorySlice = createSlice({
  name: 'videoHistory',
  initialState,
  reducers: {
    savedToHistory: (state, action) => {
      state.listOfHistory.push({ bookmarked: true, ...action.payload });
    },
    removeFromHistory: (state, action) => {
      state.listOfHistory = state.listOfHistory.filter(
        (video) => video?.id?.videoId !== action.payload
      );
    },
  },
});

export const { savedToHistory, removeFromHistory } = videoHistorySlice.actions;

export default videoHistorySlice.reducer;
