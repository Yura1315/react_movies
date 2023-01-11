import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAppSelector } from '../../hooks/redux/redux';

type AuthHocPropsType = {
  children: ReactNode;
};

const AuthHoc = ({ children }: AuthHocPropsType) => {
  const { isAuth } = useAppSelector((state) => state.persistedReducer.authReducer.user);

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

export default AuthHoc;
