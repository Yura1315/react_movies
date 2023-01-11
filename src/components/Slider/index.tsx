import React from 'react';
import { Link } from 'react-router-dom';
import { useGetGenresListQuery } from '../../services/movieApiService';
import IGenre from '../../models/IGenre';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import './index.scss';

const Slider = () => {
  const { data: movieData, isLoading, error } = useGetGenresListQuery('');

  return (
    <div className="slider">
      {isLoading && <h2>Loading... </h2>}
      {error && <h2>Something went wrong... </h2>}
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}>
        {movieData?.genres?.map((genre: IGenre, i: number) => (
          <SwiperSlide key={i}>
            <Link to={`/genres/${genre.name}/${genre.id}`} style={{ textDecoration: 'none' }}>
              <p className="genre">{genre.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
