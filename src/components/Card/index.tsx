import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { ICard } from '../../models/ICard';

const Card = ({ id, name, imgUrl, rate }: ICard) => {
  return (
    <Link to={`/movies/${id}`} style={{ textDecoration: 'none' }}>
      <div className="card_container">
        <div className="background_container">
          <img className="background" alt={name} src={imgUrl} />
        </div>
        <div className="rate_container">{rate}</div>
      </div>
    </Link>
  );
};

export default Card;
