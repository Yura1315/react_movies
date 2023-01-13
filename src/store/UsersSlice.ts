import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../models/IUser";
import IMovie from "../models/IMovie";

export interface UsersState {
  users: IUser[];
  currentUserId: string;
}

const initialState: UsersState = {
  users: [],
  currentUserId: ''
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.users.push(action.payload);
    },
    addFavorites(state, action: PayloadAction<IMovie>) {
      const currentUser = state.users.find((user) => user.id === state.currentUserId)
      currentUser?.favorites.push(action.payload);
    },
    auth(state, action: PayloadAction<string>) {
      state.currentUserId = action.payload;
    },
    logOut(state) {
      state.currentUserId = '';
    },
    removeFavorites(state, action: PayloadAction<IMovie>) {
      const currentUser = state.users.find((user) => user.id === state.currentUserId)
      currentUser?.favorites.filter((el) => el.id !== action.payload.id);
    },
  }
});

export default usersSlice.reducer;