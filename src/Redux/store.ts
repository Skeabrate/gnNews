import { configureStore } from '@reduxjs/toolkit';
import activeViewSlice from './slices/activeViewSlice';
import articlesCountSlice from './slices/articlesCount';

export const store = configureStore({
  reducer: {
    activeView: activeViewSlice,
    articlesCount: articlesCountSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
