import React from 'react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';


const Yes_Auth = () => {
  const Auth = useSelector((state: RootState) => state.auth.login);
  return (
    <>
      <span className="log">{Auth}</span>
    </>
  );
};

export default Yes_Auth;