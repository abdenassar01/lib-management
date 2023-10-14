import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },

    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { logOut, setCredentials } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
