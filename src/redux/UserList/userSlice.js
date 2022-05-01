import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "services/userAPI";

const initialState = {
  status: "idle",
  userList: [],
  isSelectedAll: false,
};

export const getUsersAsync = createAsyncThunk(
  "userList/getUsers",
  async (_, thunkApi) => {
    try {
      const response = await getUsers();
      return response.map((user) => ({ ...user, selected: false }));
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userListSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    selectAllUsers: (state) => {
      state.isSelectedAll = !state.isSelectedAll;
      state.userList = state.userList.map((user) => ({
        ...user,
        selected: state.isSelectedAll,
      }));
    },
    toggleSelected: (state, { payload }) => {
      state.userList = state.userList.map((user) =>
        user.id === payload ? { ...user, selected: !user.selected } : user
      );
    },
    deleteUsers: (state) => {
      state.userList = state.userList.filter(
        ({ selected }) => selected === false
      );
      state.isSelectedAll = false;
    },
  },

  extraReducers: {
    [getUsersAsync.pending]: (state) => {
      return {
        ...state,
        status: "pending",
      };
    },
    [getUsersAsync.fulfilled]: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        status: "fulfilled",
        userList: payload,
      };
    },
    [getUsersAsync.rejected]: (state) => {
      return {
        ...state,
        status: "rejected",
      };
    },
  },
});

export const selectUsers = (state) => state.userItem.userList;

export const getIsSelectedAll = (state) => state.userItem.isSelectedAll;

export const selectStatus = (state) => state.userItem.status;

export default userListSlice.reducer;

export const { selectAllUsers, deleteUsers, toggleSelected } =
  userListSlice.actions;
