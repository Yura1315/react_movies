import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/index';
import useFetchData from '../../hooks/useFetchData';
import { useGetMovieDetailsQuery } from '../../store/movieApiSlice';
import './index.scss';

const MovieDetails = () => {
  const { id: movieId } = useParams();
  // const { movieData } = useFetchData(
  //   `https://api.themoviedb.org/3/movie/${movieId}?api_key=a5b5898e6b325a52c139406d69bf2613&language=en-US`
  // );

  const { data: movieData, isFetching, error } = useGetMovieDetailsQuery(movieId);

  console.log(movieId);
  console.log(movieData);

  const popularity = Math.trunc(movieData?.popularity);
  const rate = Number(movieData?.vote_average.toFixed(1));
  const releaseDate = movieData?.release_date.split('-')[0];

  return (
    <div>
      <h1>About the movie</h1>
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
      </div>
    </div>
  );
};

export default MovieDetails;
