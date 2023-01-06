import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IMovie from '../models/IMovie';
import IGenre from '../models/IGenre';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getMovieDetails: builder.query<IMovie, string>({
      query: (movieId) =>
        `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    }),
    getGenres: builder.query<IGenre, string>({
      query: (genreId) =>
        `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=${genreId}`,
    }),
    getMovies: builder.query<IMovie, string>({
      query: (searchTerm) =>
        `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${searchTerm}`,
    }),
    getTrending: builder.query<IMovie, string>({
      query: () => `/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieDetailsQuery,
  useGetTrendingQuery,
} = movieApi;
