import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// реализовать апи
import { moviesApi } from '../hooks/redux/sevices/moviesApi';
const Auth = {
  isAuth: false,
  login: "",
  pass: "",
  history: [],
  likes: []
}
const IS_LOGIN = "IS_LOGIN";
const IS_REGISTER = "IS_REGISTER";
const SIGN_OUT = "SIGN_OUT";

const authReducer = (state = Auth, action: any) => {
  switch (action.type) {
    case IS_LOGIN:
      return { ...state, isAuth: true, login: action.login, pass: action.pass }
    case IS_REGISTER:
      return { ...state, isAuth: true, login: action.login, pass: action.pass }
    case SIGN_OUT:
      return { ...state, isAuth: false }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const persistor = persistStore(store);
