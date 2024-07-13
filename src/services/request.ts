import axios, { Canceler } from "axios";
import useToken from "src/hooks/useToken";

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



authorizedRequest.interceptors.request.use(
  async (axiosConfig) => {
    const { getToken } = useToken();

    const token = await getToken();

    if (token && token.accessToke) {
      axiosConfig.headers.Authorization = `JWT ${token.accessToke}`;
    }

    return axiosConfig;
  },
  async (error) => await Promise.reject(error)
);

export default authorizedRequest;
