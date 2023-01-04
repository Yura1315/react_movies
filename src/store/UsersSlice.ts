import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../models/IUser";

interface UsersState {
  users: IUser[];
}

const initialState: UsersState = {
  users: []
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.users.push(action.payload);
    }
  }
});

export default usersSlice.reducer;
