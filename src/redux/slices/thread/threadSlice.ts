import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const threadSlice = createSlice({
  name: "thread",
  initialState,
  reducers: {},
});

export const { actions: threadActions, reducer: threadReducer } = threadSlice;

export default threadSlice;
