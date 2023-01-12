import IUser from "../../models/IUser";

export const selectCurrentUsers = (state: any) => {
  const id = state.persistedReducer.usersReducer.currentUserId
  const currentUser = state.persistedReducer.usersReducer.users.find((user: IUser) => user.id === id);
  return currentUser
}
