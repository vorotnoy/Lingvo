import { createSlice } from "@reduxjs/toolkit";
import { addUser, logOutUser, loginUser } from "./authOperation";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    uid: ""
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state,  {payload} ) => {
        state.uid = payload;
      })
      .addCase(logOutUser.fulfilled, (state, { payload }) => {
        state.uid = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.uid = payload;
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
