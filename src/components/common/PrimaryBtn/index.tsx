import React, { SyntheticEvent } from 'react';
import './index.scss';

type PrimaryBtnPropsType = {
  title: string;
  type: 'button' | 'submit';
  handler?: (e: SyntheticEvent) => void;
};

const PrimaryBtn = ({ title, handler, type = 'button' }: PrimaryBtnPropsType) => {
  return (
    <button className="primary-btn" type={type} onClick={handler}>
      {title}
    </button>
  );
};

export default PrimaryBtn;
