import React, { ChangeEvent } from 'react';
import ShowPassword from '../../ShowPassword';
import '../Input/index.scss';

type InputPasswordPropsType = {
  placeholder?: string;
  type?: 'text' | 'password';
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
  visible?: boolean;
  handlerShow?: () => void;
  textErr: string;
};

const InputPassword = ({
  placeholder,
  type = 'password',
  value,
  setValue,
  visible,
  handlerShow,
  textErr,
}: InputPasswordPropsType) => {
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
        type={visible ? 'text' : 'password'}
        placeholder={placeholder}
        value={value.value}
        onChange={handler}
        onFocus={handlerFocus}
      />
      {value.error && type === 'password' ? <span className="err-item">{textErr}</span> : ''}
      {type === 'password' ? <ShowPassword handlerShow={handlerShow} /> : ''}
    </div>
  );
};

export default InputPassword;
