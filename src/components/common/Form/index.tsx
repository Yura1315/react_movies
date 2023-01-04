import React, { ReactNode } from 'react';
import './index.scss';

type FormPropsType = {
  children: ReactNode;
};

const Form = ({ children }: FormPropsType) => {
  return (
    <form className="form" action="#">
      {children}
    </form>
  );
};

export default Form;
