import React from 'react';
import { useSelector } from 'react-redux';
import '../common/Header/index.scss'
import { RootState } from '../../store/store';
import Signout from '../Signout/Signout';

const AuthPage = () => {
  const Auth = useSelector((state: RootState) => state.persistedReducer.authReducer.user);
  return (
    <>
      <Signout />
      <span className='auth'>Пользователь:{Auth.username}</span>
    </>
  );
};

export default AuthPage;