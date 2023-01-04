import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import IUser from '../models/IUser';

interface AuthState {
  user: IUser;
}

const initialState: AuthState = {
  user: {
    id: '',
    username: '',
    password: '',
    favorites: [],
    history: []
  },
};

export const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    auth(state, action: PayloadAction<IUser>) {
      state.user.id = action.payload.id;
      state.user.username = action.payload.username;
      state.user.password = action.payload.password;
      state.user.favorites = action.payload.favorites;
      state.user.history = action.payload.history;
    },
    logOut(state) {
      state.user = initialState.user;
    }
  }
});

export default AuthSlice.reducer;
