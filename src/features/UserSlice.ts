import { fetchUsers } from "./ActionCreater";
import { RootState } from "./../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  count: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    usersFetching(state: UserState) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state: UserState, action: PayloadAction<IUser[]>) {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    usersFetchingError(state: UserState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (
      state: UserState,
      action: PayloadAction<IUser[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (
      state: UserState,
      action: PayloadAction<IUser[]>
    ) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (
      state: UserState,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
