import React, { useState, useEffect } from 'react';
import './stLogin.sass'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from "react-router-dom";
import ShowError from '../Registrtion/ShowError';

const Login = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state: RootState) => state.auth);
  const [login, setMail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [err, setErr] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    Auth.isAuth && navigate('/');
  }, [Auth]);


  const Check = (): void => {
    if (login === "" || pass === "") {
      setErr('Поля логин и пароль должны быть заполнены!')
    }
    else if (localStorage.getItem(login) === pass) {
      dispatch({ type: 'IS_LOGIN', payload: Auth.isAuth, login, pass });
    }
    else {
      setErr('Неверный логин или пароль')
    }
  }
  return (
    <>
      {err ? <ShowError errText={err} /> : null}
      <div className='maint'>
        <div className="text">
          <h1 className='title'>Вход в аккаунт</h1>
          <input type="text"
            maxLength={25}
            className='text__inp'
            placeholder='Введите логин'
            value={login}
            onChange={event => setMail(event.target.value)} />
          <input
            maxLength={25}
            minLength={8}
            type="password"
            className='text__input'
            placeholder='Введите пароль'
            value={pass}
            onChange={event => setPass(event.target.value)} />
          <button className='text__btn' onClick={() => Check()}>Войти</button>
        </div>
      </div>
    </>
  );
};

export default Login;