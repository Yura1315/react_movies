import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { IMovie } from '../../../interfaces';
import Card from '../../components/Card/index';

const Genre = () => {
  const { id: genreId } = useParams();
  const [genreMovies, setGenreMovies] = useState([]);

  console.log(genreId);
  const getGenre = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        'https://moviesdatabase.p.rapidapi.com/titles',
        {
          params: { genre: genreId },
          headers: {
            'X-RapidAPI-Key': 'b1677af2d2msh7d92e3c36211bdbp118104jsn209ccaf22e82',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
          },
        }
      );
      const data = await response.data.results;
      console.log(data);
      setGenreMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGenre();
  }, []);

  // when loading shows this, need to fix to 'Loading'
  if (genreMovies.length === 0) return <h1>Ooops... No films were found</h1>;

  return (
    <div className="wrapper">
      {genreMovies?.slice(0, 12).map((movie: IMovie) => (
        <Card key={movie.id} id={movie.id} name={movie.titleText.text} />
      ))}
    </div>
  );
};

export default Genre;
