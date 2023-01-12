import React from 'react';
import { useAppDispatch } from '../../hooks/redux/redux';
import { setPage } from '../../store/pageSlice';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import './index.scss';

type PaginationProps = {
  currentPage: number | undefined;
  numberOfPages: number | undefined;
};

const Pagination = ({ currentPage, numberOfPages }: PaginationProps) => {
  const dispatch = useAppDispatch();

  const nextPage = (curPage: number) => {
    if (+curPage < Number(numberOfPages)) {
      dispatch(setPage(curPage + 1));
    } else if (+curPage === Number(numberOfPages)) {
      dispatch(setPage((curPage = 1)));
    }
  };
  const prevPage = (curPage: number) => {
    if (+curPage === 1) {
      console.log('cannot go back');
    } else {
      dispatch(setPage(curPage - 1));
    }
  };
  return (
    <div className="pagination_container">
      <button onClick={() => prevPage(Number(currentPage))}>
        <AiOutlineArrowLeft />
      </button>
      <div className="pagination_number">{currentPage}</div>
      <p>out of</p>
      <div className="pagination_number">{numberOfPages}</div>
      <button onClick={() => nextPage(Number(currentPage))}>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
