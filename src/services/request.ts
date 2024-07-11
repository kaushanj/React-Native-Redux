import axios, { Canceler } from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

let cancel: Canceler;

const authorizedRequest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  cancelToken: new axios.CancelToken((c) => {
    if (cancel) cancel();
    cancel = c;
  }),
});

export const unauthorizedRequest = axios.create({
  baseURL: API_BASE_URL,
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
  },
  cancelToken: new axios.CancelToken((c) => {
    if (cancel) cancel();
    cancel = c;
  }),
});

export default authorizedRequest;
