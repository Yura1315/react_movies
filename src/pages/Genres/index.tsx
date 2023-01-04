import React from 'react';
import { useParams } from 'react-router-dom';
import IMovie from '../../models/IMovie';
import Card from '../../components/Card/index';
import useFetchData from '../../hooks/useFetchData';

const Genre = () => {
  const { id: genreId } = useParams();
  const { movieData } = useFetchData(
    `https://api.themoviedb.org/3/discover/movie?api_key=a5b5898e6b325a52c139406d69bf2613&language=en-US&with_genres=${genreId}`
  );

  console.log(genreId);

  return (
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
  );
};

export default Genre;
