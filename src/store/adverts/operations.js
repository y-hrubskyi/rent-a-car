import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/services/axios";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/adverts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
