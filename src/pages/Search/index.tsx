import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import Card from '../../components/Card/index';
import SearchBar from '../../components/SearchBar';
import IMovie from '../../models/IMovie';
import { useParams } from 'react-router-dom';
import './index.scss';
import Trending from '../../components/Trending/index';

const Search = () => {
  const { searchTerm } = useParams<string>();
  const [results, setResults] = useState<IMovie[]>([]);

  const searchQuery = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=a5b5898e6b325a52c139406d69bf2613&language=en-US&page=1&query=${searchTerm}`
      );
      const data = await response.data.results;
      setResults(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchQuery();
  }, [searchTerm]);

  console.log(results);

  return (
    <div className="search_wrapper">
      <SearchBar />
      {!searchTerm ? (
        <Trending />
      ) : (
        <div className="wrapper">
          {results?.map((item: IMovie, i: number) => (
            <Card
              id={item.id}
              name={item.title}
              key={i}
              imgUrl={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              rate={item.vote_average}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
