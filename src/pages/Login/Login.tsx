import React, { useState } from 'react';
import './stLogin.sass'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';
const Login = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state: RootState) => state.auth.isAuth);
  const [login, setMail] = useState('');
  const [pass, setPass] = useState('');
  console.log(Auth)
  const Check = () => {
    if (localStorage.getItem(login) === pass) {
      dispatch({ type: 'isLogin', payload: Auth });
    }
    else {
      alert(`Неверный логин: ${login} или пароль: ${pass}`);
    }
  }
  return (
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
        {Auth && <Link to={"/"}></Link>}
      </div>
    </div>
  );
};

export default Login;