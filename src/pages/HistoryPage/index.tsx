import React, { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import CardHistory from '../../components/CardHistory';
import { RootState } from '../../store/store';
import { AuthSlice } from '../../store/AuthSlice';
import './index.scss';
import { useAppDispatch } from '../../hooks/redux/redux';

const HistoryPage = () => {
  const dispatch = useAppDispatch();
  const { history } = useSelector((state: RootState) => state.persistedReducer.authReducer.user);
  console.log(history);
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
            {history.map((el) => (
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
