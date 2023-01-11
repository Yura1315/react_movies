import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import IUser from '../models/IUser';
import IMovie from '../models/IMovie';
import IHistory from '../models/IHistory';

interface AuthState {
  user: IUser;
}

const initialState: AuthState = {
  user: {
    id: '',
    isAuth: false,
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
      state.user.isAuth = action.payload.isAuth;
      state.user.username = action.payload.username;
      state.user.password = action.payload.password;
      state.user.favorites = action.payload.favorites;
      state.user.history = action.payload.history;
    },
    logOut(state) {
      state.user = initialState.user;
    },
    addFavorites(state, action: PayloadAction<IMovie>) {
      state.user.favorites.push(action.payload);
    },
    removeFavorites(state, action: PayloadAction<IMovie>) {
      state.user.favorites = state.user.favorites.filter((el) => el.id !== action.payload.id);
    },
    addHistory(state, action: PayloadAction<IHistory>) {
      state.user.history.push(action.payload);
    },
    removeOneHistory(state, action: PayloadAction<string>) {
      state.user.history = state.user.history.filter((el) => el.id !== action.payload);
    },
    clearHistory(state) {
      state.user.history = initialState.user.history;
    }
  }
});

export default AuthSlice.reducer;