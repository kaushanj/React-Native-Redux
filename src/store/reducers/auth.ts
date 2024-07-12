import { createSelector, createSlice, Dispatch } from "@reduxjs/toolkit";
import { IUserLogin } from "../../models/user/user.interface";
import { apiCallBegan } from "../api";
import { RootState } from "../configureStore";
import { useSelector } from "react-redux";

interface IAuth {
  isLogged: boolean;
  isLoading: boolean;
}

const AuthUser: IAuth = {
  isLogged: false,
  isLoading: false,
};

const slice = createSlice({
  name: "auth",
  initialState: AuthUser,
  reducers: {
    logingRequested: (authUser: IAuth) => {
      authUser.isLogged = false;
      authUser.isLoading = true;
    },
    userLogged: (authUser: IAuth, actions) => {
      authUser.isLogged = true;
      authUser.isLoading = false;
    },
    userLoggedFail: (authUser: IAuth, action) => {
      authUser.isLogged = false;
      authUser.isLoading = false;
    },
  },
});

export const { userLogged, logingRequested, userLoggedFail } = slice.actions;
export default slice.reducer;

const path = "/auth/jwt/create";
export const login = (data: IUserLogin) => (dispatch: Dispatch) => {
  return dispatch(
    apiCallBegan({
      method: "post",
      path,
      data,
      onStart: logingRequested.type,
      onSuccess: userLogged.type,
      onError: userLoggedFail.type,
    })
  );
};

// const selectAuthState = (state: RootState) => state.entities.auth;

const authenticatSelector = createSelector(
  [(state: RootState) => state.entities.auth],
  (authState) => authState.isLogged
);

const loadingSelector = createSelector(
  [(state: RootState) => state.entities.auth],
  (authState) => authState.isLoading
);

export const useAuthenticated = () =>
  useSelector((state: { entities: { auth: IAuth } }) =>
    authenticatSelector(state)
  );

export const useAuthLoading = () =>
  useSelector((state: { entities: { auth: IAuth } }) => loadingSelector(state));
