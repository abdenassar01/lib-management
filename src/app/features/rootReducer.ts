import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { loginReducer } from "./authentication/loginSlice";

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  login: loginReducer,
});
