import React from 'react';
import { Link } from 'react-router-dom';
import AccountNav from '../AccountNav';

const NotAuthPage = () => {
  return (
    <>
      <Link to={'/signin'}>
        <span className="account">Login</span>
      </Link>
      <AccountNav />
      <Link to={'/registr'}>
        <span className="register">Registration</span>
      </Link>
    </>
  );
};

export default NotAuthPage;
