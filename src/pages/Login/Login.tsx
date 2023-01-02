import React, { useState } from 'react';
import './stLogin.sass'
import { Route } from 'react-router-dom';
import PageWrapper from '../../components/common/PageWrapper';
import MainContainer from '../../containers/MainContainer';
import Regist from '../Registrtion/Regist';

const Login = () => {
  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const Check = () => {
    (localStorage.mail !== '' && localStorage.getItem(mail) === pass && localStorage.mail !== '') ?
      <Route path='/' element={<PageWrapper />}>
        <Route index element={<MainContainer />} />
      </Route> :
      <Route path='/register' element={<Regist />}>
      </Route>
  }
  return (
    <div className='maint'>
      <div className="text">
        <h1 className='title'>Вход в аккаунт</h1>
        <input type="text"
          className='text__inp'
          placeholder='Введите логин'
          value={mail}
          onChange={event => setMail(event.target.value)} />
        <input
          type="password"
          className='text__input'
          placeholder='Введите пароль'
          value={pass}
          onChange={event => setPass(event.target.value)} />
        <button className='text__btn' onClick={() => Check()}>Войти</button>
      </div>
    </div>
  );
};

export default Login;