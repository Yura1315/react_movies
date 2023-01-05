import React from 'react';
import AccountNav from '../../AccountNav';
import { Link } from 'react-router-dom';

const No_Auth = () => {
  return (
    <>
      <Link to={"/signin"}>
        <span className="account">Вход</span>
      </Link>:
      <AccountNav />
      <Link to={"/registr"}>
        <span className="register">Регистрация</span>
      </Link>
    </>
  );
};

export default No_Auth;