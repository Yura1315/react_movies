import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Card/index';

type DetailsMovie = {
  id: number | undefined;
  name: string | undefined;
  imgUrl: string | undefined;
  title: string;
  plot_overview: string;
  poster: string;
};

const MovieDetails = () => {
  const [movieData, setMovieData] = useState<DetailsMovie>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id: movieId } = useParams();

  const baseUrl = 'https://api.watchmode.com/v1';
  const query = `/title/${movieId}/details/?apiKey=85354a2ce4ba4cdb04b2c3cd6ca32e86`;

  console.log(movieId);

  const getMovieDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}${query}`);

      const data = await response.data;
      setIsLoading(false);
      setMovieData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="details_wrapper">
      <h1>About the movie</h1>
      <Card id={movieData?.id} name={movieData?.title} imgUrl={movieData?.poster} />
      <div className="details_container">
        <p>{movieData?.title}</p>
        <p>{movieData?.plot_overview}</p>
        <p>{movieData?.plot_overview}</p>
        <p>
          {movieData?.sources?.map((item: any) => (
            <a>{item.web_url}</a>
          ))}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
