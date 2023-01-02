import React from 'react';
import GeneralSlider from '../../components/GeneralSlider';
import IMovie from '../../models/IMovie';

type MainPagePropsType = {
  slides: IMovie[];
};

const MainPage = ({ slides }: MainPagePropsType) => {
  return <GeneralSlider slides={slides} />;
};

export default MainPage;
