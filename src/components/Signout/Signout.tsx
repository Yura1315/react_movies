import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Auth = useSelector((state: RootState) => state.auth)

  const goOut = () => {
    dispatch({ type: 'SIGN_OUT', payload: Auth });
    CheckAuth();
  }

  const CheckAuth = () => {
    useEffect(() => {
      Auth.isAuth && navigate('/');
    }, [Auth]);
  }

  return (
    <button className='signup' onClick={() => goOut()}>Выйти</button>
  );
};

export default Signout;