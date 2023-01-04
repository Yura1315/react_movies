import React from 'react';
import './index.scss';

type SearhBtnPropsType = {
  handlerSearch?: () => void;
};

const SearchBtn = ({ handlerSearch }: SearhBtnPropsType) => {
  return (
    <button className="search-btn" type="submit" onClick={handlerSearch}>
      Search
    </button>
  );
};

export default SearchBtn;
