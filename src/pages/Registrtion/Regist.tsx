import React, { useState, useEffect } from 'react';
import './stRegist.sass'
import { RootState } from '../../store/store';
import { useNavigate } from "react-router-dom";
import ShowError from './ShowError';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import { usersSlice } from '../../store/UsersSlice';
import { v4 } from 'uuid';

const Regist = () => {
  const dispatch = useAppDispatch();
  const { addUser, auth } = usersSlice.actions;
  const currentUserId = useAppSelector((state: RootState) => state.persistedReducer.usersReducer.currentUserId);
  const [login, setMail] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [err, setErr] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    currentUserId && navigate('/');
  }, [currentUserId]);

  const Save = (): void => {
    localStorage.setItem(login, pass);
    if (login !== '' && pass !== '') {
      const uniqKey = v4();
      const user = {
        id: uniqKey,
        username: login,
        password: pass,
        history: [],
        favorites: [],
      }
      dispatch(addUser(user))
      dispatch(auth(user.id));
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