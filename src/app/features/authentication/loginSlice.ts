import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    accessToken: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
    },

    logOut: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { logOut, setCredentials } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
