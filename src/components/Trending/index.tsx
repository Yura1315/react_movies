import React from 'react';
import IMovie from '../../models/IMovie';
import Card from '../Card/index';
import useFetchData from '../../hooks/useFetchData';

const Trending = () => {
  const { movieData } = useFetchData(
    `https://api.themoviedb.org/3/trending/all/day?api_key=a5b5898e6b325a52c139406d69bf2613`
  );

  return (
    <>
      <h1>Trending</h1>
      <div className="wrapper">
        {movieData?.results.map((item: IMovie, i: number) => (
          <Card
            id={item.id}
            name={item.title}
            key={i}
            imgUrl={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            rate={item.vote_average}
          />
        ))}
      </div>
    </>
  );
};

export default Trending;
