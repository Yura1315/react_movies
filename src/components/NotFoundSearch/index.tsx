import React from 'react';
import PrimaryLink from '../common/PrimaryLink';
import notFoundMovies from '../../assets/img/notFoundMovies.png';
import './index.scss';

const NotFoundSearch = () => {
  return (
    <div className="notfound__search">
      <div className="notfound__text">
        Nothing found for your search
        <PrimaryLink link="/" title="go to home" />
      </div>
      <img className="notfound__img" src={notFoundMovies} alt="notFoundMovies" />
    </div>
  );
};

export default NotFoundSearch;
