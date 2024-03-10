import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { fetchAdverts } from "./operations";

export const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter((item) => item.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchAdverts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { addToFavorites, removeFromFavorites } = advertsSlice.actions;

const advertsConfig = {
  key: "favorites-adverts",
  storage,
  whitelist: ["favorites"],
};

export const advertsReducer = persistReducer(
  advertsConfig,
  advertsSlice.reducer
);
