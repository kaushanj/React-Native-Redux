import { createSelector, createSlice, Dispatch } from "@reduxjs/toolkit";
import { IUserLogin } from "../../models/user/user.interface";
import { apiCallBegan } from "../api";
import { RootState } from "../configureStore";
import { useSelector } from "react-redux";

interface IAuth {
  isLogged: boolean;
}

const AuthUser: IAuth = {
  isLogged: false,
};

const slice = createSlice({
  name: "auth",
  initialState: AuthUser,
  reducers: {
    userLogingRequested: (authUser: IAuth, actions) => {
      authUser.isLogged = false;
    },
    userLogged: (authUser: IAuth, actions) => {
      authUser.isLogged = true;
      console.log(actions.payload);
    },
    userLoggedFail: (authUser: IAuth, action) => {
      authUser.isLogged = false;
    },
  },
});

const { userLogged, userLogingRequested, userLoggedFail } = slice.actions;
export default slice.reducer;

const path = "/auth/jwt/create";
export const login = (data: IUserLogin) => (dispatch: Dispatch) => {
  dispatch(
    apiCallBegan({
      method: "post",
      path,
      data,
      onStart: apiCallBegan.type,
      onSuccess: userLogged.type,
      onError: userLoggedFail.type,
    })
  );
};

const selectAuthState = (state: RootState) => state.entities.auth;

export const checkAuthenticated = createSelector(
  [selectAuthState],
  (authState) => authState.isLogged
);

export const useAuthenticated = () =>
  useSelector((state: { entities: { auth: IAuth } }) =>
    checkAuthenticated(state)
  );
