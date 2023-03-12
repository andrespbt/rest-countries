import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from './apis/countriesAPI';
import uiReducer from './features/ui/uiSlice';
import countriesReducer from './features/countries/countriesSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    countries: countriesReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(countriesApi.middleware),
});
