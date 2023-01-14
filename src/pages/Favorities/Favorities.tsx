import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import Card from '../../components/Card';
import { selectCurrentUsers } from '../../components/Selectors/users';
import IMovie from '../../models/IMovie';
import { usersSlice } from '../../store/UsersSlice';

const Favorities = () => {
  const user = useAppSelector(selectCurrentUsers)
  const dispatch = useAppDispatch()
  const { removeFavorites } = usersSlice.actions;

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
      <button onClick={() => dispatch(removeFavorites())}>delete</button>
    </>
  );
};

export default Favorities;