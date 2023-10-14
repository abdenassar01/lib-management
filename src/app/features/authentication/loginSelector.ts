import { State } from "../store";

export const selectUser = (state: State) => state.login.user;
export const selectToken = (state: State) => state.login.accessToken;
