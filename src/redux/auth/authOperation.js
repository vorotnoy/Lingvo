import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  createUserFirebase,
  logOutUserFirebase,
  loginUserFirebase,
} from "../../services/firebase/auth";
import {Notify} from 'notiflix';

export const addUser = createAsyncThunk(
  "auth/adduser",
  async (dataUser, thunkAPI) => {
    try {
      const newUser = await createUserFirebase(dataUser);
      return newUser;
    } catch (error) {
      Notify.failure("wrong auth");
   
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "auth/logoutuser",
  async (_, thunkAPI) => {
    try {
      await logOutUserFirebase();
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginuser",
  async (user, thunkAPI) => {
    try {
      const getUser = await loginUserFirebase(user);
      return getUser.uid;
    } catch (error) {
      Notify.failure('wrong auth')
      thunkAPI.rejectWithValue(error.message);
    }
  }
);


