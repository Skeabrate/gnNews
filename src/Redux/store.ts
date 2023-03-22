import { configureStore } from '@reduxjs/toolkit';
import activeViewSlice from './activeViewSlice';

export const store = configureStore({
  reducer: {
    activeView: activeViewSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
