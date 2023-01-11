import React from 'react';
import { useAppSelector } from '../../hooks/redux/redux';
import { AuthSlice } from '../../store/AuthSlice';

const Favorities = () => {
  const { user } = useAppSelector((state) => state.persistedReducer.authReducer);
  const { addFavorites, removeFavorites } = AuthSlice.actions
  return (
    <>
      {user.favorites.length ?
        (<h2>No Favoritites! U can choose this from film page</h2>) :
        (
          user.favorites.forEach(i =>
            <Card
              adult={i.adult}
              backdrop_path: string;
      genre_ids: string[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      origin_country: string;
      release_date: string;
      runtime: number;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
        ></Card>)
        )
      }
    </>
  );
};

export default Favorities;