import React from 'react';
import BtnArrow from '../common/BtnArrow';
import './index.scss';

type PaginationPropsType = {
  page: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
};

const Pagination = ({ page, totalPages, nextPage, prevPage }: PaginationPropsType) => {
  return (
    <div className="paginate__wrap">
      <BtnArrow styles="paginate__left" handler={prevPage} />
      <div className="paginate__info">
        {page} / {totalPages}
      </div>
      <BtnArrow styles="paginate__right" handler={nextPage} />
    </div>
  );
};

export default Pagination;
