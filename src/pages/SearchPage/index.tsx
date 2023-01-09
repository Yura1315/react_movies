import React from 'react';
import { useTransition, animated } from 'react-spring';
import Card from '../../components/Card';
import NotFoundSearch from '../../components/NotFoundSearch';
import Pagination from '../../components/Pagination';
import { IMovieFetch } from '../../models/IMovie';
import './index.scss';

type SearchPagePropsType = {
  dataMovies: IMovieFetch;
  queryParams: string | null;
  prevPage: () => void;
  nextPage: () => void;
};

const SearchPage = ({ dataMovies, prevPage, nextPage, queryParams }: SearchPagePropsType) => {
  const transitions = useTransition(dataMovies.results, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  });
  return (
    <section className="search__container">
      {!dataMovies.results.length ? (
        <NotFoundSearch />
      ) : (
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
            {transitions((style, el) => (
              <animated.li style={style}>
                <Card
                  key={el.id}
                  adult={el.adult}
                  backdrop_path={el.backdrop_path}
                  genre_ids={el.genre_ids}
                  id={el.id}
                  original_language={el.original_language}
                  original_title={el.original_title}
                  overview={el.overview}
                  popularity={el.popularity}
                  poster_path={el.poster_path}
                  release_date={el.release_date}
                  title={el.title}
                  video={el.video}
                  vote_average={el.vote_average}
                  vote_count={el.vote_count}
                />
              </animated.li>
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
      )}
    </section>
  );
};

export default SearchPage;
