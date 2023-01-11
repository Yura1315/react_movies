import React from 'react';
import { Link } from 'react-router-dom';
import IMovie from '../../models/IMovie';
import plug from '../../assets/img/plug.png';
import './index.scss';

type SadgestPropsType = {
  movies: IMovie[] | undefined;
  loading: boolean;
};

const Sadgest = ({ movies, loading }: SadgestPropsType) => {
  return (
    <div className="sadgest__container">
      <ul className="sadgest__list">
        {movies?.map((el) => (
          <Link key={el.id} to={`/movie/${el.id}`} className="sadgest__link">
            <div className="sadgest__link-left">
              {!el?.poster_path ? (
                <img src={plug} alt="plug" />
              ) : (
                <img src={'http://image.tmdb.org/t/p/w500' + el?.poster_path} alt="poster" />
              )}
            </div>
            <div className="sadgest__link-right">{el.title}</div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sadgest;
