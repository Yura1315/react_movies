import React from 'react';
import './index.scss';

type PrimaryBtnPropsType = {
  title: string;
  handler?: () => void;
};

const PrimaryBtn = ({ title, handler }: PrimaryBtnPropsType) => {
  return (
    <button className="primary-btn" type="button" onClick={handler}>
      {title}
    </button>
  );
};

export default PrimaryBtn;
