import axios from "axios";
import { IUser } from "../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("rejected");
    }
  }
);
