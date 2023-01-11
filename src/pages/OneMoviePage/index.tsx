import React from 'react';
import IOneMoviePage from '../../models/IOneMoviePage';
import plug from '../../assets/img/plug.png';
import './index.scss';
import { Link } from 'react-router-dom';

type OneMoviePagePropsType = {
  movie: IOneMoviePage | undefined;
};

const OneMoviePage = ({ movie }: OneMoviePagePropsType) => {
  return (
    <section className="movie-page">
      <div className="movie-page__wrap">
        <div className="movie-page__left">
          {!movie?.poster_path ? (
            <img src={plug} alt="plug" />
          ) : (
            <img src={'http://image.tmdb.org/t/p/w500' + movie?.poster_path} alt="poster" />
          )}
        </div>
        <div className="movie-page__right">
          <div className="movie-page__header">
            <h1>{movie?.original_title}</h1>
            <ul className="movie-page__category-list">
              {movie?.genres.map((el) => (
                <Link to="/" className="movie-page__category-item" key={el.id}>
                  {el.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="movie-page__middle">
            <p className="movie-page__overview">{movie?.overview}</p>
          </div>
          <div className="movie-page__bottom">
            <span className="movie-page__budget">Budget: {movie?.budget}$</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneMoviePage;
