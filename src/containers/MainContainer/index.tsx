import React, { useEffect, useState } from 'react';
import IMovie from '../../models/IMovie';
import makeRequest from '../../network';
import MainPage from '../../pages/MainPage';

const MainContainer = () => {
  const [slides, setSlides] = useState<IMovie[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await makeRequest({
        url: 'https://moviesdatabase.p.rapidapi.com/titles',
        params: { limit: '5' },
      });
      setSlides(data.results);
    };
    if (slides.length === 0) {
      getData();
    }
    console.log(slides);
  }, [slides]);
  return <MainPage />;
};

export default MainContainer;
