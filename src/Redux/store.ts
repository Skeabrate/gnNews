import { configureStore } from '@reduxjs/toolkit';
import activeViewSlice from './slices/activeView';
import articlesCountSlice from './slices/articlesCount';
import newsDetailsSlice from './slices/newsDetails';

export const store = configureStore({
  reducer: {
    activeView: activeViewSlice,
    articlesCount: articlesCountSlice,
    newsDetails: newsDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
