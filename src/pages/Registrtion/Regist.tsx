import React, { useState } from 'react';
import './stRegist.sass'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';

const Regist = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state: RootState) => state.auth);
  const [login, setMail] = useState('')
  const [pass, setPass] = useState('')
  const Save = () => {
    localStorage.setItem(login, pass);
    (login !== '' && pass !== '') ?
      dispatch({ type: 'isLogin', payload: Auth, login, pass }) :
      alert('Придумайте логин и пароль')
  }
  return (
    <div className='maint'>
      <div className="text">
        <h1>Зарегестрироваться</h1>
        <input type="text"
          maxLength={25}
          className='text__inp'
          placeholder='Придумайте логин'
          value={login}
          onChange={event => setMail(event.target.value)} />

        <input type="password"
          maxLength={25}
          minLength={8}
          className='text__input'
          placeholder='Придумайте пароль'
          value={pass}
          onChange={event => setPass(event.target.value)} />
        <button className='text__btn' onClick={() => Save()}>Старт</button>
        {Auth && <Link to={"/"}></Link>}
      </div>
    </div>
  );
};

export default Regist;