import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import IMovie from '../models/IMovie';
import IGenre from '../models/IGenre';

type IMovieData = {
  genres: IGenre[];
  results: IMovie[];
};

const useFetchGenres = (url: string) => {
  const [movieData, setMovieData] = useState<IMovieData>();

  const getData = async () => {
    try {
      const response: AxiosResponse = await axios.get(url);
      const data = await response.data;
      setMovieData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { movieData };
};

export default useFetchGenres;
