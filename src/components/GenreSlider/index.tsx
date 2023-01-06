import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import './index.scss';
import { Link } from 'react-router-dom';
import IGenre from '../../models/IGenre';

type GenreSliderPropsType = {
  dataGenre: IGenre[];
};

const GenreSlider = ({ dataGenre }: GenreSliderPropsType) => {
  return (
    <div className="genre-slider">
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        freeMode
        // centeredSlides
        // centeredSlidesBounds
        modules={[FreeMode]}>
        {dataGenre.map((genre: IGenre, i: number) => (
          <SwiperSlide key={i}>
            <Link
              className="genre-slider__name"
              to={`/genres/${genre.id}`}
              style={{ textDecoration: 'none' }}>
              {genre.name}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GenreSlider;
