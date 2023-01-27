import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthStore } from "./Auth.interface";

const initialState: AuthStore = {
  access_token: undefined,
  refresh_token: undefined,
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, {}: PayloadAction<void>) => {
      localStorage.clear();
      return initialState;
    },
    setAuth: (state, { payload }: PayloadAction<AuthStore>) => {
      return { ...payload };
    },
  },
});

export const { logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
