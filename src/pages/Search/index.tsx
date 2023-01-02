import React, { useState, useEffect, ChangeEvent } from 'react';
import axios, { AxiosResponse } from 'axios';
import useDebounce from '../../hooks/useDebounce';
import Card from '../../components/Card/index';
import { IMovie } from '../../../interfaces';
import './index.scss';

const Search = () => {
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState([]);
  const debouncedValue = useDebounce(query, 800);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const searchQuery = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        `https://moviesdatabase.p.rapidapi.com/titles/search/title/${debouncedValue}`,
        {
          headers: {
            'X-RapidAPI-Key': 'b1677af2d2msh7d92e3c36211bdbp118104jsn209ccaf22e82',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
          },
        }
      );
      const data = await response.data.results;
      setIsLoading(false);
      setResults(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      setIsLoading(true);
      searchQuery();
    } else {
      setResults([]);
    }
  }, [debouncedValue]);

  console.log(results);

  return (
    <div>
      Search for your favorite film
      <br />
      <input type="text" onChange={handleChange} />
      {isLoading && <h1>Loading...</h1>}
      <div className="wrapper">
        {results?.map((item, i) => (
          // Для карточки нужен проп ( imgUrl={item.primaryImage?.url}) - но он кидает ошибку, картинок почти нет
          <Card id={item.id} name={item.titleText.text} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Search;
