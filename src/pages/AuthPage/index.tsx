/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { SyntheticEvent, useState } from 'react';
import Form from '../../components/common/Form';
import Input from '../../components/common/Input';
import InputPassword from '../../components/common/inputPassword';
import PrimaryBtn from '../../components/common/PrimaryBtn';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import { AuthSlice } from '../../store/AuthSlice';
import '../RegPage/index.scss';

const AuthPage = () => {
  const { users } = useAppSelector((state) => state.usersReducer);
  const { auth } = AuthSlice.actions;
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });
  const [visible, setVisible] = useState<boolean>(false);

  const validation = () => {
    if (!username.value.length || !password.value.length) {
      setUsername((prev) => ({ ...prev, error: true }));
      setPassword((prev) => ({ ...prev, error: true }));
      return false;
    }

    if (users.length) {
      const item = users.find((el) => el.username === username.value);
      if (!item) {
        setUsername((prev) => ({ ...prev, error: true }));
        setPassword((prev) => ({ ...prev, error: true }));
        return false;
      } else if (item && password.value !== item.password) {
        setPassword((prev) => ({ ...prev, error: true }));
        return false;
      }
    } else {
      setUsername((prev) => ({ ...prev, error: true }));
      setPassword((prev) => ({ ...prev, error: true }));
    }

    return true;
  };

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (validation()) {
      const item = users.find((el) => el.username === username.value);
      dispatch(auth({ ...item! }));
    }
  };

  const handlerShow = () => {
    setVisible((prev) => !prev);
  };

  return (
    <Form>
      <div className="input__wrap">
        <Input
          placeholder="username"
          type="text"
          value={username}
          setValue={setUsername}
          textErr="Неверный логин, пароль или пользователя  не существует"
        />
        <InputPassword
          placeholder="password"
          type="password"
          value={password}
          setValue={setPassword}
          handlerShow={handlerShow}
          textErr="Неверный логин, пароль или пользователя  не существует"
          visible={visible}
        />
      </div>
      <PrimaryBtn title="sign in" handler={submitHandler} type="submit" />
    </Form>
  );
};

export default AuthPage;
