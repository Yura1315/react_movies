import React from 'react';
import './Signout.sass'
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import { AuthSlice } from '../../store/AuthSlice';

const Signout = () => {
  const dispatch = useAppDispatch();
  const { logOut } = AuthSlice.actions;
  const { users } = useAppSelector(state => state.persistedReducer.usersReducer)
  const login = useAppSelector((state) => state.persistedReducer.authReducer.user.username);

  const goOut = () => {
    // users.find(i => {
    //   return i.username === login
    // }).isAuth = false;
    dispatch(logOut());
  }

  return (
    <span className='signup' onClick={() => goOut()}>Выйти</span>
  );
};

export default Signout;