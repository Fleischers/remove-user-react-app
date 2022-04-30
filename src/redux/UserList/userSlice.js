import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "services/userAPI";

const initialState = {
  status: "idle",
  userList: [],
  selectedIds: [],
  userItemsSelected: {},
};

export const getUsersAsync = createAsyncThunk(
  "userList/getUsers",
  async (_, thunkApi) => {
    try {
      const response = await getUsers();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userListSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addToSelected: (state, action) => {
      state.selectedIds = [...state.selectedIds, action.payload];
    },
    removeFromSelected: (state, action) => {
      state.selectedIds = state.selectedIds.filter((id) => {
        return id !== action.payload;
      });
    },
    selectAllUsers: (state) => {
      state.selectedIds = state.userList.map((user) => user.id);
    },
    deleteUsers: (state) => {
      state.userList = state.userList.filter(
        ({ id }) => !state.selectedIds.includes(id)
      );
      state.selectedIds = [];
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
      const userItemsSelected = payload.reduce(
        (acc, curr) => ({ ...acc, [curr.id]: false }),
        {}
      );
      console.log(userItemsSelected);
      return {
        ...state,
        status: "fulfilled",
        userList: payload,
        userItemsSelected,
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

export const selectStatus = (state) => state.userItem.status;

export const selectremovalIds = (state) => state.userItem.selectedIds;

// export const selectUserIds = (state) => state.userItem.userItemsSelected;

export default userListSlice.reducer;

export const {
  addToSelected,
  removeFromSelected,
  selectAllUsers,
  deleteUsers,
} = userListSlice.actions;
