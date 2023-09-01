import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import authReducer from './auth/authSlices';
import teacherReducer from './Teachers/teacherSlices'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    teacher:teacherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      {
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }
    ),
});

export const persistor = persistStore(store);
