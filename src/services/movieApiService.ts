import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IMovie from '../models/IMovie';
import IGenre from '../models/IGenre';

type IMovieData = {
  genres: IGenre[];
  results: IMovie[];
};

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getMovieDetails: builder.query<IMovie, string>({
      query: (movieId) =>
        `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    }),
    getGenres: builder.query<IMovieData, string>({
      query: (genreId) =>
        `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=${genreId}&page`,
    }),
    getMovies: builder.query<IMovieData, string>({
      query: (searchTerm) =>
        `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${searchTerm}`,
    }),
    getGenresList: builder.query<IMovieData, string>({
      query: () => `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieDetailsQuery,
  useGetGenresListQuery,
} = movieApi;
