import React, { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import IHistory from '../../models/IHistory';
import { useAppDispatch } from '../../hooks/redux/redux';
import { AuthSlice } from '../../store/AuthSlice';
import './index.scss';

const CardHistory = ({ id, link, search, date }: IHistory) => {
  const dispatch = useAppDispatch();
  const { removeOneHistory } = AuthSlice.actions;
  const removeHistory = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeOneHistory(id));
  };
  return (
    <Link className="card-link" to={link}>
      <div className="card-link__wrap">
        <span className="card-link__title">Search</span>
        <span className="card-link__title">Date</span>
      </div>
      <div className="card-link__items">
        <span className="card-link__item">{search}</span>
        <span className="card-link__item">{date}</span>
      </div>
      <button className="cross-btn" type="button" onClick={removeHistory}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M17 17L1 1M17 1L1 17" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </Link>
  );
};

export default CardHistory;
