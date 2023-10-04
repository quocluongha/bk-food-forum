import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const threadSlice = createSlice({
  name: "thread",
  initialState,
  reducers: {},
});

export const { actions, reducer } = threadSlice;

export default threadSlice;
