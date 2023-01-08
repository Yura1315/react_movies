import React, { SyntheticEvent } from 'react';
import { useTransition, animated } from 'react-spring';
import CardHistory from '../../components/CardHistory';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import { AuthSlice } from '../../store/AuthSlice';
import './index.scss';

const HistoryPage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);
  const { clearHistory } = AuthSlice.actions;
  const transitions = useTransition(user.history, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  });

  const handleClearHistory = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(clearHistory());
  };

  return (
    <section className="history__page">
      {!user.history.length ? (
        <div>There is no information in the search history</div>
      ) : (
        <>
          <div className="history__clear">
            <button className="history__clear-btn" onClick={handleClearHistory}>
              clear history
            </button>
          </div>
          <ul className="history__wrap">
            {transitions((style, el) => (
              <animated.div style={style}>
                <CardHistory
                  key={el.id}
                  id={el.id}
                  link={el.link}
                  search={el.search}
                  date={el.date}
                />
              </animated.div>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default HistoryPage;
