import { State } from "../store";

export const selectUser = (state: State) => state.booksReducer;
export const selectToken = (state: State) => state.login.accessToken;
