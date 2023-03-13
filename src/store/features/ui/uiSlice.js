import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isDarkMode: false,
    isMobile: null,
  },
  reducers: {
    toggleMode: state => {
      state.isDarkMode = !state.isDarkMode;
    },
    setIsMobile: (state, { payload }) => {
      state.isMobile = payload.isMobile;
    },
  },
});

export const { toggleMode, setIsMobile } = uiSlice.actions;

export default uiSlice.reducer;
