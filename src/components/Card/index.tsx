import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './index.scss';
import { ICard } from '../../../interfaces';
import useFetchData from '../../hooks/useFetchData';

const Card = ({ id, name, imgUrl }: ICard) => {
  const { movieData } = useFetchData(`https://moviesdatabase.p.rapidapi.com/titles/${id}/ratings`);

  const rating = movieData?.results?.averageRating;

  return (
    <Link to={`/search/${id}`} style={{ textDecoration: 'none' }}>
      <div className="card">
        <p>{name}</p>
        <p>{id}</p>
        {rating ? <p>{rating}</p> : <p>No rates</p>}
        <img alt={name} src={imgUrl} />
      </div>
    </Link>
  );
};

export default Card;
