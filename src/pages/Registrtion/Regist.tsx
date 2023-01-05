import React, { useState, useEffect } from 'react';
import './stRegist.sass'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from "react-router-dom";

const Regist = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state: RootState) => state.auth);
  const [login, setMail] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const navigate = useNavigate();
  const CheckAuth = () => {
    useEffect(() => {
      Auth.isAuth && navigate('/');
    }, [Auth]);
  }
  const Save = () => {
    localStorage.setItem(login, pass);
    if (localStorage.login !== undefined) {
      alert(`Логин: ${login} уже существует. Придумайте другой :) `)
    }
    else if (login !== '' && pass !== '') {
      dispatch({ type: 'IS_REGISTER', payload: Auth, login, pass })
      CheckAuth();
    }
    else {
      alert('Придумайте логин и пароль')
    }
  }
  return (
    <>
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
        </div>
      </div>
    </>
  );
};

export default Regist;