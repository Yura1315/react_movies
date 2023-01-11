import React, { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import CardHistory from '../../components/CardHistory';
import { RootState } from '../../store/store';
import { AuthSlice } from '../../store/AuthSlice';
import IHistory from '../../models/IHistory';
import './index.scss';
import { useAppDispatch } from '../../hooks/redux/redux';

const data = [{ id: '34543', link: '/', search: 'green', date: '10.12.1994' }];

const HistoryPage = () => {
  const dispatch = useAppDispatch();
  const { history } = useSelector((state: RootState) => state.persistedReducer.authReducer.user);
  const { clearHistory } = AuthSlice.actions;

  const handleClearHistory = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(clearHistory());
  };

  return (
    <section className="history__page">
      {!history.length ? (
        <div>There is no information in the search history</div>
      ) : (
        <>
          <div className="history__clear">
            <button className="history__clear-btn" onClick={handleClearHistory}>
              clear history
            </button>
          </div>
          <ul className="history__wrap">
            {data.map((el) => (
              <CardHistory
                key={el.id}
                id={el.id}
                link={el.link}
                search={el.search}
                date={el.date}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default HistoryPage;
