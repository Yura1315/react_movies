import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieDetailsQuery } from '../../services/movieApiService';
import Card from '../../components/Card/index';
import './index.scss';
import { AuthSlice } from '../../store/AuthSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const { data: movieData, isLoading, error } = useGetMovieDetailsQuery(movieId as string);

  const popularity = Math.trunc(movieData?.popularity as number);
  const rate = Number(movieData?.vote_average.toFixed(1));
  const releaseDate = movieData?.release_date.split('-')[0];
  const dispatch = useAppDispatch();

  const Like = () => {
    const { user } = useAppSelector((state) => state.persistedReducer.authReducer);
    const { addFavorites } = AuthSlice.actions
    // dispatch(addFavorites());

  }
  return (
    <div>
      <h1>About the movie</h1>
      {isLoading && <h2>Loading... </h2>}
      {error && <h2>Something went wrong... </h2>}
      <div className="details_wrapper">
        <Card
          id={movieData?.id}
          name={movieData?.title}
          imgUrl={`https://image.tmdb.org/t/p/w500/${movieData?.poster_path}`}
          rate={rate}
        />
        <div className="details_container">
          <p>{movieData?.title}</p>
          <div className="overview">
            <p>{movieData?.runtime} min</p>
            <p>{popularity}</p>
            <p>{releaseDate}yr.</p>
            <p>{movieData?.origin_country}</p>
          </div>
          <p>{movieData?.overview}</p>
        </div>
        <button className='details_like' onClick={() => Like()}><svg
          width="24"
          height="24"
          viewBox="0 -3 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
            fill="black"
          />
        </svg></button>
      </div>
    </div>
  );
};

export default MovieDetails;
