import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import apiMiddleware from "./middleware/api";
import { useDispatch } from "react-redux";



const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
