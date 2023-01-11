import React from 'react';
import './Signout.sass'
import { useAppDispatch } from '../../hooks/redux/redux';
import { AuthSlice } from '../../store/AuthSlice';

const Signout = () => {
  const dispatch = useAppDispatch();
  const { logOut } = AuthSlice.actions;

  const goOut = () => {
    dispatch(logOut());
  }

  return (
    <span className='signup' onClick={() => goOut()}>Выйти</span>
  );
};

export default Signout;