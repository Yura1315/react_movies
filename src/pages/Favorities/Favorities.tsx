import React from 'react';
import { useAppSelector } from '../../hooks/redux/redux';
import { AuthSlice } from '../../store/AuthSlice';
import Card from '../../components/Card';
import { selectCurrentUsers } from '../../components/Selectors/users';
import IMovie from '../../models/IMovie';

const Favorities = () => {
  const user = useAppSelector(selectCurrentUsers)
  // const { addFavorites, removeFavorites } = AuthSlice.actions
  return (
    <>
      {!user?.favorites.length ?
        (<h2>No Favoritites! U can choose this from film page</h2>) :
        user.favorites.map((movie: IMovie) => {
          return <Card
            key={movie.id}
            id={movie.id}
            name={movie.title}
            imgUrl={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            rate={movie.vote_average}
          />
        })}
    </>
  );
};

export default Favorities;