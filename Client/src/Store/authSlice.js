import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userType: null,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { userData, userType } = action.payload;

      state.isAuthenticated = true;
      state.userData = userData;
      state.userType = userType;
    },
    logout: (state) => {
      (state.isAuthenticated = false),
        (state.userData = null),
        (state.userType = null);
    },
    update: (state, action) => {
      const userData = action.payload;
      state.userData = userData;
    },
  },
});

export const { login, logout,update } = authSlice.actions;
export default authSlice.reducer;
