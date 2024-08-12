import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '~/services/axios';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchData',
  async (searchParams, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?${searchParams}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
