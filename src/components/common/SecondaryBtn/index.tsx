import React from 'react';
import './index.scss';

type SecondaryBtnPropsType = {
  title: string;
  handle?: () => void;
  type?: 'button' | 'submit';
};

const SecondaryBtn = ({ title, handle, type = 'button' }: SecondaryBtnPropsType) => {
  return (
    <button className="secondary-btn" type={type} onClick={handle}>
      {title}
    </button>
  );
};

export default SecondaryBtn;
