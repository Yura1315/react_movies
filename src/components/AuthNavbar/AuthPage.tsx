import React from 'react';
import '../common/Header/index.scss'
import Signout from '../Signout/Signout';
import { selectCurrentUsers } from '../Selectors/users';
import { useAppSelector } from '../../hooks/redux/redux';

const AuthPage = () => {
  const user = useAppSelector(selectCurrentUsers)
  return (
    <>
      <Signout />
      <span className='auth'>User:{user?.username}</span>
    </>
  );
};

export default AuthPage;