import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from './apis/countriesAPI';
import uiReducer from './features/ui/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    [countriesApi.reducerPath] : countriesApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware)
});
