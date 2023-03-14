import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isDarkMode: false,
    isMobile: null,
    isFilterMenuOpen: false,
  },
  reducers: {
    toggleMode: state => {
      state.isDarkMode = !state.isDarkMode;
    },
    setIsMobile: (state, { payload }) => {
      state.isMobile = payload;
    },
    setFilterMenuOpen: (state, { payload }) => {
      state.isFilterMenuOpen = payload;
    },
  },
});

export const { toggleMode, setIsMobile, setFilterMenuOpen } = uiSlice.actions;

export default uiSlice.reducer;
