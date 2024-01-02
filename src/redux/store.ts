import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistCombineReducers,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import {
  authReducer,
  persistedCommonReducer,
  profileReducer,
  settingReducer,
  threadReducer,
} from "./slices";

const appReducer = persistCombineReducers(
  {
    key: "root",
    storage: AsyncStorage,
  },
  {
    common: persistedCommonReducer,
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
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger);
  },
});

const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
