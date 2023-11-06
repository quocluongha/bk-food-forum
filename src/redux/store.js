import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistCombineReducers, persistStore } from "redux-persist";

import { authReducer } from "./auth";
import { profileReducer } from "./profile";
import { threadReducer } from "./thread";
import { settingReducer } from "./setting";

const appReducer = persistCombineReducers(
  {
    key: "root",
    storage: AsyncStorage,
  },
  {
    auth: authReducer,
    profile: profileReducer,
    thread: threadReducer,
    setting: settingReducer,
  }
);

const store = configureStore({
  reducer: appReducer,
  devTools: __DEV__,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});

const persistor = persistStore(store);

export { store, persistor };
