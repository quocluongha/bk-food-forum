import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { AppTheme } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  theme: AppTheme.SYSTEM,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<AppTheme>) {
      state.theme = action.payload;
    },
  },
});

export const { actions: commonActions, reducer: commonReducer } = commonSlice;

export const persistedCommonReducer = persistReducer(
  { key: "common", storage: AsyncStorage, whitelist: ["theme"] },
  commonReducer
);

export default commonSlice;
