import { createAction } from "@reduxjs/toolkit";
import { Method } from "axios";

export type REQUEST_TYPE = {
  path: string;
  method: Method;
  data: {};
  onStart?: string;
  onSuccess: string;
  onError?: string;
};

export const apiCallBegan = createAction<REQUEST_TYPE>("api/callBegan");
export const apiCallSuccess = createAction("api/callSuccess");
export const apiCallFail = createAction<string>("api/callFail");
