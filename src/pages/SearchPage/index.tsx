import React from 'react';
import Card from '../../components/Card';
import GenreSlider from '../../components/GenreSlider';
import Pagination from '../../components/Pagination';
import IGenre from '../../models/IGenre';
import { IMovieFetch } from '../../models/IMovie';
import './index.scss';

type SearchPagePropsType = {
  dataGenre: IGenre[];
  dataMovies: IMovieFetch;
  queryParams: string | null;
  prevPage: () => void;
  nextPage: () => void;
};

const SearchPage = ({
  dataGenre,
  dataMovies,
  prevPage,
  nextPage,
  queryParams,
}: SearchPagePropsType) => {
  return (
    <section className="search__container">
      <GenreSlider dataGenre={dataGenre} />
      <div className="card-movies__wrap">
        <div className="search__header">
          <div className="search__info">
            Search: <span className="search__results">{queryParams}</span>. found:
            <span className="search__results"> {dataMovies.total_results}</span>
          </div>
          <Pagination
            page={dataMovies.page}
            totalPages={dataMovies.total_pages}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </div>
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
        <div className="search__bottom">
          <Pagination
            page={dataMovies.page}
            totalPages={dataMovies.total_pages}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
