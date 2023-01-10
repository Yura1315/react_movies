import React from 'react';
import { Link } from 'react-router-dom';
import { useGetGenresListQuery } from '../../store/movieApiSlice';
import IGenre from '../../models/IGenre';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import './index.scss';

const Slider = () => {
  const { data: movieData } = useGetGenresListQuery();

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
