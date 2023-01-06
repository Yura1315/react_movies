import React from 'react';
import { Link } from 'react-router-dom';
import plug from '../../assets/img/plug.png';
import SecondaryBtn from '../common/SecondaryBtn';
import './index.scss';

type CardPropsType = {
  id: number;
  title: string;
  poster: string;
  rating: number;
  release: string;
};

const Card = ({ title, poster, rating, release, id }: CardPropsType) => {
  return (
    <Link className="card" to={`/movie/${id}`}>
      {!poster ? (
        <img className="card__poster" src={plug} alt="plug" />
      ) : (
        <img
          className="card__poster"
          src={'http://image.tmdb.org/t/p/w500' + poster}
          alt="poster"
        />
      )}
      <div className="card__info">
        <span className="card__title">{title}</span>
        <span className="card__rating">{rating}</span>
        <span className="card__release">Release: {release}</span>
        <div className="card-btn__wrap">
          <SecondaryBtn title="add favorites" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
