import React, { useState, useEffect, useId } from 'react';
import './stRegist.sass'
import { RootState } from '../../store/store';
import { useNavigate } from "react-router-dom";
import ShowError from './ShowError';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import { AuthSlice } from '../../store/AuthSlice';
import { usersSlice } from '../../store/UsersSlice';

const Regist = () => {
  const dispatch = useAppDispatch();
  const { auth } = AuthSlice.actions;
  const { addUser } = usersSlice.actions;
  const Auth = useAppSelector((state: RootState) => state.persistedReducer.authReducer.user);
  const [login, setMail] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [err, setErr] = useState<string>('');
  const navigate = useNavigate();
  const uniqKey = useId();

  useEffect(() => {
    Auth.isAuth && navigate('/');
  }, [Auth.isAuth]);

  const Save = (): void => {
    localStorage.setItem(login, pass);
    if (login !== '' && pass !== '') {
      const user = {
        id: uniqKey,
        isAuth: true,
        username: login,
        password: pass,
        history: [],
        favorites: [],
      }
      dispatch(addUser(user))
      dispatch(auth(user));
    }
    else {
      setErr('Заполните логин или пароль')
    }
  }
  return (
    <>
      {err ? <ShowError errText={err} /> : null}
      <div className='maint'>
        <div className="text">
          <h1>Зарегестрироваться</h1>
          <input type="text"
            maxLength={25}
            className='text__inp'
            placeholder='Придумайте логин'
            value={login}
            required
            onChange={event => setMail(event.target.value)} />

          <input type="password"
            maxLength={25}
            minLength={8}
            className='text__input'
            placeholder='Придумайте пароль'
            value={pass}
            required
            onChange={event => setPass(event.target.value)} />
          <button className='text__btn' onClick={() => Save()} >Старт</button>
        </div>
      </div>
    </>
  );
};

export default Regist;