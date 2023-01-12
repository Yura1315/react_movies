import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IMovie from '../models/IMovie';
import IGenre from '../models/IGenre';
import IMovieFetch from '../models/IMovieFetch';

type IMovieData = {
  genres: IGenre[];
  results: IMovie[];
};

type Props = {
  searchTerm: string | undefined;
  page: number;
};

type PropsGenre = {
  genreId: string | undefined;
  page: number;
};

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getMovieDetails: builder.query<IMovie, string>({
      query: (movieId) =>
        `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    }),
    getGenres: builder.query<IMovieFetch, PropsGenre>({
      query: ({ genreId, page }) =>
        `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=${genreId}&page=${page}`,
    }),
    getMovies: builder.query<IMovieFetch, Props>({
      query: ({ searchTerm, page }) =>
        `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${searchTerm}&page=${page}`,
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
