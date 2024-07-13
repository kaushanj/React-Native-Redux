import {  describe, expect, it, vi } from "vitest";

import MockAdapter from "axios-mock-adapter";
import request from "../../services/request";

import store from "../configureStore";
import { login, refresh } from "../reducers/auth";
import * as routes from "src/api/routes";

vi.mock("expo-secure-store", () => {
  return {
    getItemAsync: vi.fn(() => Promise.resolve(null)),
    setItemAsync: vi.fn(() => Promise.resolve()),
    deleteItemAsync: vi.fn(() => Promise.resolve()),
  };
});
describe("Auth Reducer", () => {
  describe("Login", () => {
    it("Should return isLogged true when calling fake API call with valide username and password", async () => {
      const tokenResponse = { access: "123", refresh: "1234" };
      const loginDetails = { username: "admin", password: "123" };

      const fakeAxios = new MockAdapter(request, {
        delayResponse: 0,
      });

      fakeAxios.onPost(routes.tokenPost).reply(200, tokenResponse);

      await store.dispatch(login(loginDetails));

      expect(store.getState().entities.auth.isLoggedIn).toBeTruthy();
      fakeAxios.restore();
      fakeAxios.reset();
    });

    it("Should return isLogged true when calling real API call with valide username and password", async () => {
      const loginDetails = { username: "admin", password: "123" };

      await store.dispatch(login(loginDetails));
      expect(store.getState().entities.auth.isLoggedIn).toBeTruthy();
    });
  });

  describe("Refresh", () => {
    it("Should return refresh token with fake API request", async () => {
      const fakeAxios = new MockAdapter(request, {
        delayResponse: 0,
      });

      fakeAxios.onPost(routes.tokenRefresh).reply(200, { access: "zxc" });
      await store.dispatch(refresh());

      expect(store.getState().entities.auth.isLoggedIn).toBeTruthy();
      fakeAxios.restore();
    });

    it("Should return isLoggedIn false with real request", async () => {
      await store.dispatch(refresh());
      console.log(store.getState().entities.auth.isLoggedIn);

      expect(store.getState().entities.auth.isLoggedIn).toBeFalsy();
    });
  });
});
