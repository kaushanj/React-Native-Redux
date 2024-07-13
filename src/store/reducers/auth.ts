import { useSelector } from "react-redux";
import { createSelector, createSlice, Dispatch } from "@reduxjs/toolkit";

import { IUserLogin } from "../../models/user/user.interface";
import { apiCallBegan } from "../api";
import { RootState } from "../configureStore";

import useToken from "../../hooks/useToken";
import * as routes from "src/api/routes";

interface IAuth {
  isLoading: boolean;
  isLoggedIn?: boolean;
}

const AuthUser: IAuth = {
  isLoading: false,
};

const slice = createSlice({
  name: "auth",
  initialState: AuthUser,
  reducers: {
    logingRequested: (authUser: IAuth) => {
      authUser.isLoading = true;
    },
    LoggedIn: (authUser: IAuth, actions) => {
      authUser.isLoading = false;
      authUser.isLoggedIn = true;
      const { setToken } = useToken();
      setToken({
        accessToke: actions.payload.access,
        refreshToken: actions.payload.refresh,
      });
    },
    authRefresh: (authUser: IAuth, actions) => {
      const { setToken } = useToken();
      setToken({
        accessToke: actions.payload.access,
      });
      authUser.isLoggedIn = true;
    },
    userLoggedFail: (authUser: IAuth) => {
      authUser.isLoading = false;
      authUser.isLoggedIn = false;
      const { remove } = useToken();
      remove();
    },
    userLoggedOut: (authUser: IAuth) => {
      authUser.isLoading = false;
      authUser.isLoggedIn = false;
      const { remove } = useToken();
      remove();
    },
  },
});

const {
  LoggedIn,
  logingRequested,
  userLoggedFail,
  userLoggedOut,
  authRefresh,
} = slice.actions;
export default slice.reducer;
export const login = (data: IUserLogin) => (dispatch: Dispatch) => {
  return dispatch(
    apiCallBegan({
      method: "post",
      path: routes.tokenPost,
      data,
      onStart: logingRequested.type,
      onSuccess: LoggedIn.type,
      onError: userLoggedFail.type,
    })
  );
};

export const refresh = () => async (dispatch: Dispatch) => {
  const { getToken } = useToken();
  const token = await getToken();

  return dispatch(
    apiCallBegan({
      method: "post",
      data: {
        refresh: token?.refreshToken,
      },
      path: routes.tokenRefresh,
      onSuccess: authRefresh.type,
      onError: userLoggedFail.type,
    })
  );
};

export const logout = () => (dispatch: Dispatch) => {
  return dispatch(userLoggedOut());
};

const loadingSelector = createSelector(
  [(state: RootState) => state.entities.auth],
  (authState) => authState.isLoading
);

const loggedInSelector = createSelector(
  [(state: RootState) => state.entities.auth],
  (authState) => authState.isLoggedIn
);

export const useAuthLoading = () =>
  useSelector((state: { entities: { auth: IAuth } }) => loadingSelector(state));
export const useLoggedIn = () =>
  useSelector((state: { entities: { auth: IAuth } }) =>
    loggedInSelector(state)
  );
