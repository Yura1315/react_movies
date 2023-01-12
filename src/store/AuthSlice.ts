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