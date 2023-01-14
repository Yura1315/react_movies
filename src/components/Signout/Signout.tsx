import React from 'react';
import './Signout.sass'
import { useAppDispatch } from '../../hooks/redux/redux';
import { usersSlice } from '../../store/UsersSlice';
import { useNavigate } from 'react-router-dom';

const Signout = () => {
  const dispatch = useAppDispatch();
  const { logOut } = usersSlice.actions;
  const navigate = useNavigate()

  const goOut = () => {
    dispatch(logOut());
    navigate('/signin')
  }

  return (
    <span className='signup' onClick={() => goOut()}>Exit</span>
  );
};

export default Signout;