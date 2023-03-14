import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload.filter;
    },
  },
});

export const { setFilter } = countriesSlice.actions;

export default countriesSlice.reducer;
