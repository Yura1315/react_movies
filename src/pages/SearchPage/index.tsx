import React from 'react';
import Card from '../../components/Card';
import GenreSlider from '../../components/GenreSlider';
import IGenre from '../../models/IGenre';
import IMovie, { IMovieFetch } from '../../models/IMovie';
import './index.scss';

type SearchPagePropsType = {
  dataGenre: IGenre[];
  dataMovies: IMovieFetch;
  pageParams: string | null;
};

const SearchPage = ({ dataGenre, dataMovies, pageParams }: SearchPagePropsType) => {
  return (
    <section className="search__container">
      <GenreSlider dataGenre={dataGenre} />
      <div className="card-movies__wrap">
        <span className="search__info">
          Search: <span className="search__results">{pageParams}</span>. found:
          <span className="search__results"> {dataMovies.total_results}</span>
        </span>
        <ul className="card-movies__list">
          {dataMovies.results.map((el) => (
            <Card
              key={el.id}
              id={el.id}
              title={el.title}
              poster={el.poster_path}
              rating={el.vote_average}
              release={el.release_date}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SearchPage;
