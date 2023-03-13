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
    getCountries: builder.query({
      query: () => '/all',
    }),
    getAllCountriesByRegion: builder.query({
      query: continent => `/region/${continent}`,
    }),
    getCountryByCode: builder.query({
      query: code => `/alpha/${code}`,
    }),
  }),
});

export const {
  useGetCountriesByNameQuery,
  useGetCountriesQuery,
  useGetAllCountriesByRegionQuery,
  useGetCountryByCodeQuery,
} = countriesApi;
