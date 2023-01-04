import React from 'react';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import IGenre from '../../models/IGenre';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import './index.scss';

const Slider = () => {
  const { movieData } = useFetchData(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=a5b5898e6b325a52c139406d69bf2613&language=en-US`
  );

  // const genresList: IGenre[] = movieData?.genres;
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
            <Link to={`/genres/${genre.id}`} style={{ textDecoration: 'none' }}>
              <p className="genre">{genre.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
