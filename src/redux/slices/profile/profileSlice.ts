import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;

export default profileSlice;
