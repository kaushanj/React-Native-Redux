import { describe, expect, it } from "vitest";

import { login, } from "../reducers/auth";
import { apiCallBegan } from "../api";

describe("Auth", () => {
  it("Should return access token with valide username and password", () => {
    const loginDetails = { username: "admin", password: "123" };
    const result = login(loginDetails);
    console.log(result);

    const expected = {
      type: userLogged.type,
      //   method: "post",
      //   path: "/auth/jwt/create",
      payload: loginDetails,
      //   onStart: apiCallBegan.type,
      //   onSuccess: "auth/userLogged",
      // onError: userLoggedFail.type,
    };

    expect(result).toEqual(expected);
  });
});
