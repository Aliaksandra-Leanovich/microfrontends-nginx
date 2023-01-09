import { createSlice } from "@reduxjs/toolkit";
import { IUserStore } from "../types";

const initialState: IUserStore = {
  isAuthorized: localStorage.getItem("userToken"),
  token: localStorage.getItem("userToken"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.isAuthorized = localStorage.getItem("userToken");
      state.token = action.payload;
    },

    unsetUser: (state) => {
      state.isAuthorized = localStorage.removeItem("userToken");
      state.token = "";
    },
  },
});
export const { setUserToken, unsetUser } = userSlice.actions;
export default userSlice.reducer;
