import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAppSelector } from '../../hooks/redux/redux';

type AuthHocPropsType = {
  children: ReactNode;
};

const AuthHoc = ({ children }: AuthHocPropsType) => {
  const location = useLocation();
  const { user } = useAppSelector((state) => state.authReducer);

  if (!user.username) {
    return <Navigate to="/login/auth" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default AuthHoc;
