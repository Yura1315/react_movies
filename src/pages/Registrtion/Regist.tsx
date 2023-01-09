import React, { useState, useEffect } from 'react';
import './stRegist.sass'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from "react-router-dom";
import ShowError from './ShowError';

const Regist = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state: RootState) => state.persistedReducer.auth);
  const [login, setMail] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [err, setErr] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    Auth.isAuth && navigate('/');
  }, [Auth.isAuth]);

  const Save = (): void => {
    localStorage.setItem(login, pass);
    if (localStorage.getItem(login) === pass) {
      setErr('Такой логин уже существует')
    }
    else if (login !== '' && pass !== '') {
      dispatch({ type: 'IS_REGISTER', payload: Auth.isAuth, login, pass })
    }
    else {
      setErr('Заполните поле логин и пароль')
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