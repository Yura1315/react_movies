import React, { ReactNode } from 'react';

type FormPropsType = {
  children: ReactNode;
};

const Form = ({ children }: FormPropsType) => {
  return <form action="#">{children}</form>;
};

export default Form;
