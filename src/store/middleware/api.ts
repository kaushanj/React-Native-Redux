import { Middleware } from "redux";
import { unauthorizedRequest } from "../../services/request";
import * as actiions from "../api";

const apiMiddleware: Middleware<{}> =
  ({ dispatch }) =>
  (next) =>
  async (action: any) => {
    if (action.type != "api/callBegan") return next(action);

    const { path, method, data, onSuccess, onStart, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const response = await unauthorizedRequest({ url: path, method, data });
      console.log(response.data);

      actiions.apiCallSuccess(response.data);

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      if (error instanceof Error) {
        // dispatch(actiions.apiCallFail(error.message));

        if (onError) dispatch({ type: onError, payload: error.message });
      }
    }
  };

export default apiMiddleware;
