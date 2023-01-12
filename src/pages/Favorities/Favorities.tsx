import React from 'react';
import { useAppSelector } from '../../hooks/redux/redux';
import { AuthSlice } from '../../store/AuthSlice';
import Card from '../../components/Card';

const Favorities = () => {
  const user = useAppSelector((state) => state.persistedReducer.authReducer.user);
  const { addFavorites, removeFavorites } = AuthSlice.actions
  return (
    <>
      {!user.favorites.length ?
        (<h2>No Favoritites! U can choose this from film page</h2>) :
        (
          <h2>You like this films</h2>
          // <Card
          //   key={user.favorities.id}
          //   adult={user.favorities.adult}
          //   backdrop_path={user.favorities.backdrop_path}
          //   genre_ids={user.favorities.genre_ids}
          //   id={user.favorities.id}
          //   original_language={user.favorities.original_language}
          //   original_title={user.favorities.original_title}
          //   overview={user.favorities.overview}
          //   popularity={user.favorities.popularity}
          //   poster_path={user.favorities.poster_path}
          //   release_date={user.favorities.release_date}
          //   title={user.favorities.title}
          //   video={user.favorities.video}
          //   vote_average={user.favorities.vote_average}
          //   vote_count={user.favorities.vote_count} />

        )
      }
    </>
  );
};

export default Favorities;