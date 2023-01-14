import React, { useState, useEffect } from 'react';
import './stLogin.sass'
import { useNavigate } from "react-router-dom";
import ShowError from '../Registrtion/ShowError';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import { usersSlice } from '../../store/UsersSlice';


const Login = () => {
  const dispatch = useAppDispatch();
  const { auth } = usersSlice.actions;
  const { users } = useAppSelector((state) => state.persistedReducer.usersReducer);
  const currentUserId = useAppSelector((state) => state.persistedReducer.usersReducer.currentUserId);
  const [login, setMail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [err, setErr] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    currentUserId && navigate('/');
  }, [currentUserId]);


  const Check = (): void => {
    if (login === "" || pass === "") {
      setErr('Login and password fields must be filled!')
    }
    else if (localStorage.getItem(login) === pass) {
      const user = users.find(i => { return i.username === login })
      // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
      if (user) {
        dispatch(auth(user.id));
      }
    }
    else {
      setErr('wrong login or password')
    }
  }
  return (
    <>
      {err ? <ShowError errText={err} /> : null}
      <div className='maint'>
        <div className="text">
          <h1 className='title'>Sign in</h1>
          <input type="text"
            maxLength={25}
            className='text__inp'
            placeholder='Enter login'
            value={login}
            onChange={event => setMail(event.target.value)} />
          <input
            maxLength={25}
            minLength={8}
            type="password"
            className='text__input'
            placeholder='Enter password'
            value={pass}
            onChange={event => setPass(event.target.value)} />
          <button className='text__btn' onClick={() => Check()}>Check</button>
        </div>
      </div>
    </>
  );
};

export default Login;