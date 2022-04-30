import { configureStore } from "@reduxjs/toolkit";
import userReducer from "redux/UserList/userSlice";

export const store = configureStore({
  reducer: {
    userItem: userReducer,
  },
});
