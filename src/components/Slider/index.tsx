import React from 'react';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import { IGenres } from '../../../interfaces';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import './index.scss';

const Slider = () => {
  const { movieData } = useFetchData('https://moviesdatabase.p.rapidapi.com/titles/utils/genres');

  console.log(movieData);

  return (
    <div className="slider">
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}>
        {movieData?.results?.map((genre: string, i: number) => (
          <SwiperSlide key={i}>
            <Link to={`/genres/${genre}`} style={{ textDecoration: 'none' }}>
              <p className="genre">{genre}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
