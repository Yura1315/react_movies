import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://moviesdatabase.p.rapidapi.com/titles',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'b1677af2d2msh7d92e3c36211bdbp118104jsn209ccaf22e82');
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getGenres: builder.query({ query: () => '/utils/genres' }),
  }),
});

// export const { useGetGenresQuery };
