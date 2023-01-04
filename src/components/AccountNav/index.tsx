import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux/redux';
import { AuthSlice } from '../../store/AuthSlice';
import './index.scss';

const AccountNav = () => {
  const { user } = useAppSelector((state) => state.authReducer);
  const { logOut } = AuthSlice.actions;
  const dispatch = useDispatch();

  const accountLogOut = () => {
    dispatch(logOut());
  };

  console.log(user);
  return (
    <div className="account__nav">
      {!user.username ? (
        <ul className="account__list">
          <li>
            <Link to="login/reg" className="account__link">
              Registration
            </Link>
          </li>
          <li>
            <Link to="login/auth" className="account__link">
              Authorization
            </Link>
          </li>
        </ul>
      ) : (
        <>
          <div className="">
            <span className="account__user">{user.username}</span>
          </div>
          <ul className="account__list">
            <li>
              <button className="account__logout" type="button" onClick={accountLogOut}>
                Logout
              </button>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default AccountNav;
