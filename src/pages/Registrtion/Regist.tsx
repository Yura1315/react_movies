import React, { useState } from 'react';
import './stRegist.sass'
import { Route } from 'react-router-dom';
import PageWrapper from '../../components/common/PageWrapper';
import MainContainer from '../../containers/MainContainer';

const Regist = () => {
  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const Save = () => {
    localStorage.setItem(mail, pass);
    <Route path='/' element={<PageWrapper />}>
      <Route index element={<MainContainer />} />
    </Route>
  }
  return (
    <div className='maint'>
      <div className="text">
        <h1>Зарегестрироваться</h1>
        <input type="text"
          className='text__inp'
          placeholder='Придумайте логин'
          value={mail}
          onChange={event => setMail(event.target.value)} />

        <input type="password"
          className='text__input'
          placeholder='Придумайте пароль'
          value={pass}
          onChange={event => setPass(event.target.value)} />
        <button className='text__btn' onClick={() => Save()}>Старт</button>
      </div>
    </div>
  );
};

export default Regist;