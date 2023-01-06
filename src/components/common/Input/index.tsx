import React, { ChangeEvent, SyntheticEvent } from 'react';
import SearchBtn from '../SearchBtn';
import './index.scss';

type InputPropsType = {
  placeholder?: string;
  type?: 'text' | 'password';
  search?: boolean;
  value: {
    value: string;
    error: boolean;
  };
  setValue: React.Dispatch<
    React.SetStateAction<{
      value: string;
      error: boolean;
    }>
  >;
  textErr?: string;
  searchHandle?: (e: SyntheticEvent) => void;
};

const Input = ({
  placeholder,
  type = 'text',
  search,
  value,
  setValue,
  textErr,
  searchHandle,
}: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, value: event.target.value }));
  };
  const handlerFocus = () => {
    if (value.error) {
      setValue({ value: '', error: false });
    }
  };
  return (
    <div className="input__content">
      <input
        className={value.error ? 'input input-err' : 'input'}
        type={type}
        placeholder={placeholder}
        value={value.value}
        onChange={handler}
        onFocus={handlerFocus}
      />
      {value.error && type !== 'password' ? <span className="err-item">{textErr}</span> : ''}
      {search ? <SearchBtn searchHandle={searchHandle} /> : ''}
    </div>
  );
};

export default Input;
