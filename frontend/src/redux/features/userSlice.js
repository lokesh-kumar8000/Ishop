import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    token: null,
    loginAt: null,
  },
  reducers: {
    userLogin: (state, { payload }) => {
      state.data = payload.user;
      state.token = payload.token;
      state.loginAt = new Date().toISOString();
      localStorage.setItem("user", JSON.stringify(state));
    },
    userAdd: (state) => {
      const user = JSON.parse(localStorage.getItem("user")); 
      if (user) {
        state.data = user.data;
        state.token = user.token;
        state.loginAt = user.loginAt;
      }
    },
  },
});

export const { userLogin, userAdd } = userSlice.actions;
export default userSlice.reducer;
