import React, { useState } from 'react';
import Form from '../../components/common/Form';
import Input from '../../components/common/Input';
import InputPassword from '../../components/common/inputPassword';
import PrimaryBtn from '../../components/common/PrimaryBtn';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import { AuthSlice } from '../../store/AuthSlice';
import { usersSlice } from '../../store/UsersSlice';
import './index.scss';

const RegPage = () => {
  const { users } = useAppSelector((state) => state.usersReducer);
  const { auth } = AuthSlice.actions;
  const { addUser } = usersSlice.actions;
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<{ value: string; error: boolean }>({
    value: '',
    error: false,
  });
  const [password, setPassword] = useState<{ value: string; error: boolean }>({
    value: '',
    error: false,
  });
  const [visible, setVisible] = useState<boolean>(false);

  const validation = () => {
    if (!username.value.length || !password.value.length) {
      setUsername((prev) => ({ ...prev, error: true }));
      setPassword((prev) => ({ ...prev, error: true }));
      return false;
    }
    if (password.value.length < 6 || username.value.length < 2) {
      setPassword((prev) => ({ ...prev, error: true }));
      setUsername((prev) => ({ ...prev, error: true }));
      return false;
    }
    if (users.length) {
      const item = users.find((el) => el.username === username.value);
      if (item?.username) {
        setUsername((prev) => ({ ...prev, error: true }));
        return false;
      }
    }

    return true;
  };

  const submitHandler = () => {
    if (validation()) {
      const user = {
        id: Math.random().toString().slice(-4),
        username: username.value,
        password: password.value,
        history: [],
        favorites: [],
      };
      console.log(user);
      dispatch(addUser(user));
      dispatch(auth(user));
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
          textErr="Введите не менее двух сиволов или логин занят"
        />
        <InputPassword
          placeholder="password"
          type="password"
          value={password}
          setValue={setPassword}
          visible={visible}
          handlerShow={handlerShow}
          textErr="Введите не менее 6 символов"
        />
      </div>
      <PrimaryBtn title="create account" handler={submitHandler} />
    </Form>
  );
};

export default RegPage;
