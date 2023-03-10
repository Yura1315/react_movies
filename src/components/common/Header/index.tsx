import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.svg';
import './index.scss';
import { BsSearch } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import NotAuthPage from '../../AuthNavbar/NotAuthPage';
import AuthPage from '../../AuthNavbar/AuthPage';
import { useAppSelector } from '../../../hooks/redux/redux';
import { selectCurrentUsers } from '../../Selectors/users';

const Header = () => {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const user = useAppSelector(selectCurrentUsers)
  const isAuth = Boolean(user);
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__left">
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
          <Link to={'/history'} className="header__link">
            History
          </Link>
        </div>
        <div className="header__right">
          {isOpenSearch ? (
            <Link to={'/'}>
              <RxCross1
                aria-hidden="true"
                className="icon"
                onClick={() => setIsOpenSearch(false)}
              />
            </Link>
          ) : (
            <Link to={'/search/:searchTerm'}>
              <BsSearch aria-hidden="true" className="icon" onClick={() => setIsOpenSearch(true)} />
            </Link>
          )}

          <div className="favorites__wrap">
            <Link to={'/favorites'}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                // fill="black"
                />
              </svg>
            </Link>
            <div className="count-likes">{user?.favorites.length || 0}</div>
          </div>
          {isAuth ? <AuthPage /> : <NotAuthPage />}
        </div>
      </div>
    </header>
  );
};

export default Header;
