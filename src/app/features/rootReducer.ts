import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { loginReducer } from "./authentication/loginSlice";
import { booksReducer } from "./bookList/bookSlice";

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  login: loginReducer,
  booksReducer: booksReducer

});
