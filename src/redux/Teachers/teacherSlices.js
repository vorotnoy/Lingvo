import { createSlice } from "@reduxjs/toolkit";
import {
  getAll,
  getLength,
  addFavorite,
  getFavorite,
  resetAll,
  delFavorite,
} from "./teacherOperation";

const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    items: [],
    length: "",
    favorite: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(getLength.fulfilled, (state, { payload }) => {
        state.length = payload;
      })
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.favorite.push(payload);
      })
      .addCase(delFavorite.fulfilled, (state, { payload }) => {
        const del = state.favorite.indexOf(payload);
        state.favorite.splice(del,1)
      })
      .addCase(getFavorite.fulfilled, (state, { payload }) => {
        state.favorite = payload;
      })
      .addCase(resetAll.fulfilled, (state, { payload }) => {
        state.favorite = [];
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("teacher") && action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("teacher") &&
          action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});

export default teacherSlice.reducer;
