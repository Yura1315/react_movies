import React, { useEffect, useState } from 'react';
import IMovie from '../../models/IMovie';
import makeRequest from '../../network';
import MainPage from '../../pages/MainPage';

const MainContainer = () => {
  const [slides, setSlides] = useState<IMovie[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await makeRequest({
        url: 'movie/popular/',
        params: {
          page: '1',
        },
      });
      setSlides(data.results);
    };
    if (slides.length === 0) {
      getData();
    }
  }, [slides]);
  return <MainPage slides={slides} />;
};

export default MainContainer;
