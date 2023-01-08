import React, { useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import { useAppSelector } from '../../hooks/redux/redux';
import './index.scss';

const FavoritesPage = () => {
  const { user } = useAppSelector((state) => state.authReducer);
  const transitions = useTransition(user.favorites, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  });

  return (
    <section>
      {!user.favorites.length ? (
        <div className="favorites__empty">You have not added to favorites yet</div>
      ) : (
        <ul className="card-movies__list">
          {transitions((style, el) => (
            <animated.div style={style}>
              <Card
                key={el.id}
                adult={el.adult}
                backdrop_path={el.backdrop_path}
                genre_ids={el.genre_ids}
                id={el.id}
                original_language={el.original_language}
                original_title={el.original_title}
                overview={el.overview}
                popularity={el.popularity}
                poster_path={el.poster_path}
                release_date={el.release_date}
                title={el.title}
                video={el.video}
                vote_average={el.vote_average}
                vote_count={el.vote_count}
              />
            </animated.div>
          ))}
        </ul>
      )}
    </section>
  );
};

export default FavoritesPage;
