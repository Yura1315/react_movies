import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from "react-router-dom";
import './Signout.sass'

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
    <span className='signup' onClick={() => goOut()}>Выйти</span>
  );
};

export default Signout;