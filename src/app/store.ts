import { configureStore } from '@reduxjs/toolkit';
import { ieltsApi } from './ieltsApi';

export const store = configureStore({
  reducer: {
    [ieltsApi.reducerPath]: ieltsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ieltsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 