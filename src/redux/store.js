import { configureStore } from '@reduxjs/toolkit';
import  authReducer from './auth/auth-slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'authSlice',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer)
    
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);