import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserList/userSlice'

export const store = configureStore({
  reducer: {
    userItem: userReducer
  },
});
