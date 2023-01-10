import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMoviesQuery } from '../../store/movieApiSlice';
import Card from '../../components/Card/index';
import SearchBar from '../../components/SearchBar';
import IMovie from '../../models/IMovie';
import './index.scss';

const Search = () => {
  const { searchTerm } = useParams<string>();
  const { data: movieData } = useGetMoviesQuery(searchTerm as string);

  return (
    <div className="search_wrapper">
      <SearchBar />
      <div className="wrapper">
        {movieData?.results?.map((item: IMovie, i: number) => (
          <Card
            id={item.id}
            name={item.title}
            key={i}
            imgUrl={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            rate={item.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
