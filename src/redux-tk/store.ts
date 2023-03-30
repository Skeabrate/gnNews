import { configureStore } from '@reduxjs/toolkit';
import activeViewSlice from './slices/activeView';
import articlesCountSlice from './slices/articlesCount';
import checkMeSlice from './slices/checkMe';
import i18nSlice from './slices/i18n';
import newsDetailsSlice from './slices/newsDetails';

export const store = configureStore({
  reducer: {
    activeView: activeViewSlice,
    articlesCount: articlesCountSlice,
    newsDetails: newsDetailsSlice,
    checkMe: checkMeSlice,
    i18n: i18nSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
