import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../helpers/axiosBaseQuery';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',

  baseQuery: axiosBaseQuery({
    baseUrl: 'https://restcountries.com/v3.1',
  }),

  endpoints: builder => ({
    getCountriesByName: builder.query({
      query: name => ({ url: `/name/${name}`, method: 'get' }),
    }),
    getCountries: builder.query({
      query: () => ({ url: '/all', method: 'get' }),
    }),
    getAllCountriesByRegion: builder.query({
      query: continent => ({ url: `/region/${continent}`, method: 'get' }),
    }),
    getCountryByCode: builder.query({
      query: code => ({ url: `/alpha/${code}`, method: 'get' }),
    }),
  }),
});

export const {
  useGetCountriesByNameQuery,
  useGetCountriesQuery,
  useGetAllCountriesByRegionQuery,
  useGetCountryByCodeQuery,
} = countriesApi;
