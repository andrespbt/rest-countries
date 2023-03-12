import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countriesApi = createApi({
  reducerPath: 'countries',

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
