import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetGenresQuery } from '../../store/movieApiSlice';
import Card from '../../components/Card/index';
import IMovie from '../../models/IMovie';

const Genre = () => {
  const { id: genreId, name: genreName } = useParams();
  const { data: movieData } = useGetGenresQuery(genreId as string);

  console.log(genreId, genreName);

  return (
    <>
      <h1>{genreName}</h1>
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
