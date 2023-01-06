import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import IGenre from '../../models/IGenre';
import IMovie, { IMovieFetch } from '../../models/IMovie';
import makeRequest from '../../network';
import SearchPage from '../../pages/SearchPage';

const SearchContainer = () => {
  const [dataGenre, setDataGenre] = useState<IGenre[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataMovies, setDataMovie] = useState<IMovieFetch>({
    results: [],
    page: 0,
    total_results: 0,
    total_pages: 0,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParams = searchParams.get('query');
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
        url: `/search/movie?query=${pageParams}`,
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
        <SearchPage dataMovies={dataMovies} dataGenre={dataGenre} pageParams={pageParams} />
      )}
    </>
  );
};

export default SearchContainer;
