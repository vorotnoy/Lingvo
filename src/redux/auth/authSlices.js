import { createSlice } from "@reduxjs/toolkit";
import { addUser, logOutUser, loginUser } from "./authOperation";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: ""
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state,  {payload} ) => {
        state.email = payload;
      })
      .addCase(logOutUser.fulfilled, (state, { payload }) => {
        state.email = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.email = payload;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("auth") && action.type.endsWith("/pending"),
        (state) => {
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("auth") && action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});

export default authSlice.reducer;
