import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export const { actions, reducer } = profileSlice;

export default profileSlice;
