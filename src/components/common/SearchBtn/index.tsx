import React, { SyntheticEvent } from 'react';
import './index.scss';

type SearhBtnPropsType = {
  searchHandle?: (e: SyntheticEvent) => void;
};

const SearchBtn = ({ searchHandle }: SearhBtnPropsType) => {
  return (
    <button className="search-btn" type="submit" onClick={searchHandle}>
      Search
    </button>
  );
};

export default SearchBtn;
