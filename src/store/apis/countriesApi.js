import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v3.1',
  }),

  endpoints: builder => ({
    getCountriesByName: builder.query({
      query: name => `/name/${name}`,
    }),
  }),
});

export const { useGetCountriesByNameQuery } = countriesApi;
