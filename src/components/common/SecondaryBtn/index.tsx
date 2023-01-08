import React, { SyntheticEvent } from 'react';
import './index.scss';

type SecondaryBtnPropsType = {
  title: string;
  activeStyle?: string;
  handle?: (e: SyntheticEvent) => void;
  type?: 'button' | 'submit';
};

const SecondaryBtn = ({ title, handle, type = 'button', activeStyle }: SecondaryBtnPropsType) => {
  return (
    <button
      className={activeStyle ? 'secondary-btn active' : 'secondary-btn'}
      type={type}
      onClick={handle}>
      {title}
    </button>
  );
};

export default SecondaryBtn;
