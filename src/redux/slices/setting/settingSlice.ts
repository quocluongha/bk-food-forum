import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
});

export const { actions: settingActions, reducer: settingReducer } =
  settingSlice;

export default settingSlice;
