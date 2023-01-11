import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IOneMoviePage from '../../models/IOneMoviePage';
import makeRequest from '../../network';
import OneMoviePage from '../../pages/OneMoviePage';

const OneMovieContainer = () => {
  const [movie, setMovie] = useState<IOneMoviePage>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    const getDataMovie = async () => {
      const data = await makeRequest({
        url: `movie/${Number(id)}`,
      });
      setLoading(false);
      setMovie(data);
    };

    setLoading(true);
    getDataMovie();
  }, []);
  return <>{isLoading ? <h1>loading</h1> : <OneMoviePage movie={movie} />}</>;
};

export default OneMovieContainer;
