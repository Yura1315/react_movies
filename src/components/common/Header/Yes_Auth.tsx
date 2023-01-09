import React from 'react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import Signout from '../../Signout/Signout';
import './index.scss'

const Yes_Auth = () => {
  const Auth = useSelector((state: RootState) => state.persistedReducer.auth);
  return (
    <>
      <Signout />
      <span className='auth'>Пользователь:{Auth.login}</span>
    </>
  );
};

export default Yes_Auth;