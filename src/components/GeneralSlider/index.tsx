import React, { useState } from 'react';
import IMovie from '../../models/IMovie';
import BtnArrow from '../common/BtnArrow';
import PrimaryLink from '../common/PrimaryLink';
import './index.scss';

type GeneralSliderPropsType = {
  slides: IMovie[];
};

const GeneralSlider = ({ slides }: GeneralSliderPropsType) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== slides.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slides.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slides.length);
    }
  };
  return (
    <section className="general__slider">
      <div className="slider__wrap">
        <ul className="slider__list">
          {slides.map((el, i: number) => (
            <li
              key={el.id}
              className={slideIndex === i + 1 ? 'slider__item-active' : 'slider__item'}>
              <div className="slider__info">
                {el.original_title}
                <PrimaryLink title="more" link={`/movie/${slides[slideIndex - 1].id}`} />
              </div>
              <img
                className="slider__img"
                src={'http://image.tmdb.org/t/p/w500' + el.backdrop_path}
                alt="caption"
              />
            </li>
          ))}
        </ul>
        <div className="slider__btn">
          <BtnArrow styles={'btn__left'} handler={prevSlide} />
          <BtnArrow styles={'btn__right'} handler={nextSlide} />
        </div>
      </div>
    </section>
  );
};

export default GeneralSlider;
