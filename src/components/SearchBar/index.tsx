import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import formatDate from '../../services/formatDate';
import { AuthSlice } from '../../store/AuthSlice';
import './index.scss';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dispatch = useAppDispatch();
  const { addHistory } = AuthSlice.actions;
  const { isAuth } = useAppSelector((state) => state.persistedReducer.authReducer.user);
  const handleSearch = () => {
    setSearchTerm('');
    if (isAuth) {
      dispatch(
        addHistory({
          id: Math.random().toString().slice(-4),
          link: `/search/${searchTerm}`,
          search: searchTerm,
          date: formatDate(new Date()),
        })
      );
    }
  };

  return (
    <form>
      <div className="search_bar">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search_input"
          placeholder="Enter movie title..."
        />
        <Link to={`/search/${searchTerm}`} onClick={handleSearch}>
          search
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
