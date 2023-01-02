import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const useFetchGenres = (url: string) => {
  const [movieData, setMovieData] = useState([]);

  const getData = async () => {
    try {
      const response: AxiosResponse = await axios.get(url, {
        headers: {
          'X-RapidAPI-Key': 'b1677af2d2msh7d92e3c36211bdbp118104jsn209ccaf22e82',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
        },
      });
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
