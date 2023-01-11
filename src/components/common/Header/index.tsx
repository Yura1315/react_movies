import React, { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../Form';
import Input from '../Input';
import logo from '../../../assets/img/logo.svg';
import AccountNav from '../../AccountNav';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/redux';
import { AuthSlice } from '../../../store/AuthSlice';
import './index.scss';
import formatDate from '../../../utils/formatDate';

const Header = () => {
  const dispatch = useAppDispatch();
  const { addHistory } = AuthSlice.actions;
  const { user } = useAppSelector((state) => state.authReducer);
  const [search, setSearch] = useState({ value: '', error: false });
  const navigate = useNavigate();

  const searchHandle = (e: SyntheticEvent) => {
    e.preventDefault();
    if (search.value.length && user.username) {
      dispatch(
        addHistory({
          id: Math.random().toString().slice(-5),
          search: search.value,
          link: `/search/movie?query=${search.value}&page=1`,
          date: formatDate(new Date()),
        })
      );
      setSearch((prev) => ({ ...prev, value: '' }));
      navigate(`search/movie?query=${search.value}&page=1`);
    } else if (search.value.length && !user.username) {
      setSearch((prev) => ({ ...prev, value: '' }));
      navigate(`search/movie?query=${search.value}&page=1`);
    }
  };
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__left">
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
          <Link to={'history'} className="header__link">
            History
          </Link>
        </div>
        <div className="header__search">
          <Form>
            <Input
              placeholder="enter movie"
              search
              value={search}
              setValue={setSearch}
              searchHandle={searchHandle}
            />
          </Form>
        </div>
        <div className="header__right">
          <div className="favorites__wrap">
            <Link to={'favorites'}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
              </svg>
            </Link>
            {user.username ? <div className="count-likes">{user.favorites.length}</div> : ''}
          </div>
          <div className="account">
            {!user.username ? (
              <span className="account__auth">Login</span>
            ) : (
              <span className="account__auth">{user.username}</span>
            )}
            <AccountNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
