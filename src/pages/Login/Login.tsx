import React, { useState, useEffect } from 'react';
import './stLogin.sass'
import { useNavigate } from "react-router-dom";
import ShowError from '../Registrtion/ShowError';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import { AuthSlice } from '../../store/AuthSlice';


const Login = () => {
  const dispatch = useAppDispatch();
  const { auth } = AuthSlice.actions;
  const { users } = useAppSelector((state) => state.persistedReducer.usersReducer);
  const Auth = useAppSelector((state) => state.persistedReducer.authReducer.user.isAuth);
  const [login, setMail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [err, setErr] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    Auth && navigate('/');
  }, [Auth]);


  const Check = (): void => {
    if (login === "" || pass === "") {
      setErr('Поля логин и пароль должны быть заполнены!')
    }
    else if (localStorage.getItem(login) === pass) {
      const user = users.find(i => { i.username === login })
      // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
      dispatch(auth({ ...user! }));
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