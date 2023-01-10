import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetGenresQuery } from '../../services/movieApiService';
import Card from '../../components/Card/index';
import IMovie from '../../models/IMovie';

const Genre = () => {
  const { id: genreId, name: genreName } = useParams();
  const { data: movieData, isLoading, error } = useGetGenresQuery(genreId as string);

  return (
    <>
      <h1>{genreName}</h1>
      {isLoading && <h2>Loading... </h2>}
      {error && <h2>Something went wrong... </h2>}
      <div className="wrapper">
        {movieData?.results?.slice(0, 12).map((movie: IMovie) => (
          <Card
            key={movie.id}
            id={movie.id}
            name={movie.title}
            imgUrl={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            rate={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
};

export default Genre;
