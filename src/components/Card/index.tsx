import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { ICard } from '../../models/ICard';
import defaultImg from '../../assets/img/poster.jpeg';

const Card = ({ id, name, imgUrl, rate }: ICard) => {
  return (
    <Link to={`/movies/${id}`} style={{ textDecoration: 'none' }}>
      <div className="card_container">
        <div className="background_container">
          {imgUrl === 'https://image.tmdb.org/t/p/w500/null' ? (
            <>
              <img className="background" alt={name} src={defaultImg} />
              <p>{name}</p>
            </>
          ) : (
            <img className="background" alt={name} src={imgUrl} />
          )}
        </div>
        <div className="rate_container">{rate}</div>
      </div>
    </Link>
  );
};

export default Card;
