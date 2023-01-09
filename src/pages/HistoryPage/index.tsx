import React, { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import CardHistory from '../../components/CardHistory';
import { RootState } from '../../store/store';
import IHistory from '../../models/IHistory';
import './index.scss';

const data = [{ id: '34543', link: '/', search: 'green', date: '10.12.1994' }];

const HistoryPage = () => {
  const Auth = useSelector((state: RootState) => state.persistedReducer.auth.isAuth);
  const handleClearHistory = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <section className="history__page">
      {!Auth ? (
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
