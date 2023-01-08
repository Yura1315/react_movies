import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IMovieFetch } from '../../models/IMovie';
import makeRequest from '../../network';
import SearchPage from '../../pages/SearchPage';

const SearchContainer = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
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
    const getDataMovie = async () => {
      const data = await makeRequest({
        url: `/search/movie?query=${queryParams}&page=${pageParams}`,
      });
      setLoading(false);
      setDataMovie(data);
    };

    setLoading(true);
    getDataMovie();
  }, [searchParams]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <SearchPage
          dataMovies={dataMovies}
          nextPage={nextPage}
          prevPage={prevPage}
          queryParams={queryParams}
        />
      )}
    </>
  );
};

export default SearchContainer;
