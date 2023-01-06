import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import IGenre from '../../models/IGenre';
import { IMovieFetch } from '../../models/IMovie';
import makeRequest from '../../network';
import SearchPage from '../../pages/SearchPage';

const SearchContainer = () => {
  const [dataGenre, setDataGenre] = useState<IGenre[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataMovies, setDataMovie] = useState<IMovieFetch>({
    results: [],
    page: 0,
    total_results: 0,
    total_pages: 0,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query');
  const pageParams = searchParams.get('page') || 1;
  const nextPage = () => {
    if (pageParams === `${dataMovies.total_pages}`) {
      setSearchParams(`?query=${queryParams}&page=1`);
    } else {
      setSearchParams(`?query=${queryParams}&page=${+pageParams + 1}`);
    }
  };

  const prevPage = () => {
    if (+pageParams === 1) {
      setSearchParams(`?query=${queryParams}&page=${dataMovies.total_pages}`);
    } else {
      setSearchParams(`?query=${queryParams}&page=${+pageParams - 1}`);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await makeRequest({
        url: '/genre/movie/list',
      });
      setDataGenre(data.genres);
    };

    if (!dataGenre.length) {
      getData();
    }
  }, [dataGenre]);

  useEffect(() => {
    const getDataMovie = async () => {
      const data = await makeRequest({
        url: `/search/movie?query=${queryParams}&page=${pageParams}`,
      });
      console.log(data);
      setDataMovie(data);
    };
    getDataMovie();
  }, [searchParams]);

  return (
    <>
      {!dataGenre.length ? (
        <h1>Loading...</h1>
      ) : (
        <SearchPage
          dataMovies={dataMovies}
          dataGenre={dataGenre}
          nextPage={nextPage}
          prevPage={prevPage}
          queryParams={queryParams}
        />
      )}
    </>
  );
};

export default SearchContainer;
