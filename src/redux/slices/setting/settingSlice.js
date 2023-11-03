import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
});

export const { actions, reducer } = settingSlice;

export default settingSlice;