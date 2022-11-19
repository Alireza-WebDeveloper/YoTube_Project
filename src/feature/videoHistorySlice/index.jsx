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
    updateHistoryVideoDefault: (state, action) => {
      state.listOfHistory = state.listOfHistory.map((video) => {
        return { ...video, bookmarked: true };
      });
    },
  },
});

export const { savedToHistory, removeFromHistory, updateHistoryVideoDefault } =
  videoHistorySlice.actions;

export default videoHistorySlice.reducer;
