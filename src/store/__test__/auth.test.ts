import { describe, expect, it } from "vitest";

import MockAdapter from "axios-mock-adapter";
import request from "../../services/request";

import store from "../configureStore";
import { login } from "../reducers/auth";
import * as routes from "src/api/routes";

describe("Auth", () => {
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
  });

  it("Should return isLogged true when calling Real API call with valide username and password", async () => {
    const loginDetails = { username: "admin", password: "123" };

    await store.dispatch(login(loginDetails));
    expect(store.getState().entities.auth.isLoggedIn).toBeTruthy();
  });
});
