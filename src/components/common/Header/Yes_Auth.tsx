import React from 'react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import Signout from '../../Signout/Signout';


const Yes_Auth = () => {
  const Auth = useSelector((state: RootState) => state.auth.login);
  return (
    <>
      <span className="log">{Auth}</span>
      <Signout />
    </>
  );
};

export default Yes_Auth;