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
    usersFetching(state: UserState) {},
    usersFetchingSuccess(state: UserState) {}, 
    usersFetchingError(state: UserState) {},
  },
});

export default userSlice.reducer;
