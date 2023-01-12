import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAppSelector } from '../../hooks/redux/redux';
import { selectCurrentUsers } from '../Selectors/users';

type AuthHocPropsType = {
  children: ReactNode;
};

const AuthHoc = ({ children }: AuthHocPropsType) => {
  const user = useAppSelector(selectCurrentUsers)
  const isAuth = Boolean(user);
  const { pathname } = useLocation()

  if (!isAuth && pathname !== '/signin' && pathname !== '/registr') {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

export default AuthHoc;
