import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    filter: '',
    isFilterMenuOpen: false,
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload.filter;
    },
    setFilterMenuOepn: (state, { payload }) => {
      state.isFilterMenuOpen = payload.isFilterMenuOpen;
    },
  },
});

export const { setFilter, setFilterMenuOepn } = countriesSlice.actions;

export default countriesSlice.reducer;
