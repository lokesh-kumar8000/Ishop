import { createSlice, current } from "@reduxjs/toolkit";

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
    clearUser: (state) => {
      state.data = null;
      state.token = null;
      state.loginAt = null;
      localStorage.removeItem("user");
    },
  },
});

export const { userLogin, userAdd, userAddressAdd, clearUser } =
  userSlice.actions;
export default userSlice.reducer;
