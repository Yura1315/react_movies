import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Signout = () => {
  const dispatch = useDispatch()
  const Auth = useSelector((state: RootState) => state.auth.isAuth)
  const goOut = () => {
    dispatch({ type: 'Signout', payload: Auth });
  }
  return (
    <button className='signup' onClick={() => goOut()}>Выйти</button>
  );
};

export default Signout;