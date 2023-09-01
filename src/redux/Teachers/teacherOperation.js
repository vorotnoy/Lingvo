import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getAllTeachersFirebase,
  getArrayLenthFirebase,
  addFavFirebase,
  getAllFavFirebase,
  delFavFirebase
} from "../../firebase/db";

export const getAll = createAsyncThunk(
  "teacher/getall",
  async (data, thunkAPI) => {
    try {
      const teachersList = await getAllTeachersFirebase(data);
      return teachersList;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getLength = createAsyncThunk(
  "teacher/getlength",
  async (data, thunkAPI) => {
    try {
      const arrayLength = await getArrayLenthFirebase(data);
      return arrayLength;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addFavorite = createAsyncThunk(
  "teacher/addfav",
  async (data, thunkAPI) => {
    try {
      const addInFav = await addFavFirebase(data);
      return addInFav;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getFavorite = createAsyncThunk(
  "teacher/getfavorite",
  async (_, thunkAPI) => {
    try {
      const arrayFav = await getAllFavFirebase();
      console.log("arrayFav", arrayFav);
      return arrayFav;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetAll = createAsyncThunk(
  "teacher/resetall",
  async (_, thunkAPI) => {
    console.log("out");
  }
);
export const delFavorite = createAsyncThunk(
  "teacher/delfav",
  async (data, thunkAPI) => {
    try {
      const delfav = await delFavFirebase(data);
      return delfav;
    } catch (error) {
      console.log("error", error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);