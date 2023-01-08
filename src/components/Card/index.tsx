import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import SecondaryBtn from '../common/SecondaryBtn';
import Modal from '../Modal';
import plug from '../../assets/img/plug.png';
import './index.scss';
import PrimaryBtn from '../common/PrimaryBtn';
import { AuthSlice } from '../../store/AuthSlice';
import IMovie from '../../models/IMovie';

const Card = (props: IMovie) => {
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.authReducer);
  const { addFavorites, removeFavorites } = AuthSlice.actions;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleFavorites = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user.username) {
      setOpen(true);
    }

    if (user.favorites.length) {
      const item = user.favorites.filter((el) => el.id === props.id);
      if (!item.length) {
        dispatch(addFavorites(props));
      } else {
        dispatch(removeFavorites(props));
      }
    } else {
      dispatch(addFavorites(props));
    }
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleRedirect = () => {
    setOpen(false);
    navigate('/login/auth', { state: { from: location } });
  };

  useEffect(() => {
    if (open && document.body.clientHeight !== document.documentElement.clientHeight) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    } else if (!open) {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    }
  }, [open]);

  useEffect(() => {
    if (user.favorites.length) {
      const item = user.favorites.filter((el) => el.id === props.id);
      if (item.length) {
        setActive(true);
      } else {
        setActive(false);
      }
    } else {
      setActive(false);
    }
  }, [user.favorites]);

  return (
    <>
      <Link className="card" to={`/movie/${props.id}`}>
        {!props.poster_path ? (
          <img className="card__poster" src={plug} alt="plug" />
        ) : (
          <img
            className="card__poster"
            src={'http://image.tmdb.org/t/p/w500' + props.poster_path}
            alt="poster"
          />
        )}
        <div className="card__info">
          <span className="card__title">{props.title}</span>
          <span className="card__rating">{props.vote_average}</span>
          <span className="card__release">Release: {props.release_date}</span>
          <div className="card-btn__wrap">
            {active ? (
              <SecondaryBtn
                title="remove favorites"
                handle={handleFavorites}
                activeStyle="active"
              />
            ) : (
              <SecondaryBtn title="add favorites" handle={handleFavorites} />
            )}
          </div>
        </div>
      </Link>
      <Modal onClose={closeModal} open={open}>
        <div className="modal__info">
          <span className="modal__text">This feature is only available to authorized users</span>
          <PrimaryBtn title="go auth" handler={handleRedirect} type="button" />
        </div>
      </Modal>
    </>
  );
};

export default Card;
