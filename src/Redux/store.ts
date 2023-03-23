import { configureStore } from '@reduxjs/toolkit';
import activeViewSlice from './slices/activeView';
import articlesCountSlice from './slices/articlesCount';
import newsDetailsSlice from './slices/newsDetails';
import checkmeSlice from './slices/checkMe';

export const store = configureStore({
  reducer: {
    activeView: activeViewSlice,
    articlesCount: articlesCountSlice,
    newsDetails: newsDetailsSlice,
    checkMe: checkmeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
