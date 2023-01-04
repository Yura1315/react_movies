import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux/redux';
import './index.scss';

const AuthWrapper = () => {
  const { user } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.username) {
      navigate('/');
    }
  }, [user]);
  return (
    <div className="auth">
      <div className="auth__wrap">
        <h1 className="auth__title">auth please</h1>
        <div className="auth__links">
          <NavLink
            to="reg"
            className={({ isActive }) =>
              isActive ? 'auth__link auth__link-active' : 'auth__link'
            }>
            Registration
          </NavLink>
          <NavLink
            to="auth"
            className={({ isActive }) =>
              isActive ? 'auth__link auth__link-active' : 'auth__link'
            }>
            Authorization
          </NavLink>
        </div>
        <div className="auth__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
