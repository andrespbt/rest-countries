import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
       filter: ''
    },
    reducers: {
        setFilter: (state, {action} ) => {
            state.counter += 1;
        },
    }
});


export const { setFilter } = countriesSlice.actions;

export default countriesSlice.reducer;