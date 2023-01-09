import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './Signout.sass'

const Signout = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state: RootState) => state.auth)

  const goOut = () => {
    dispatch({ type: 'SIGN_OUT', payload: Auth });
  }

  return (
    <span className='signup' onClick={() => goOut()}>Выйти</span>
  );
};

export default Signout;