import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import activeViewSlice from './slices/activeView';
import articlesCountSlice from './slices/articlesCount';
import checkMeSlice from './slices/checkMe';
import i18nSlice from './slices/i18n';
import newsDetailsSlice from './slices/newsDetails';

const rootReducer = combineReducers({
  activeView: activeViewSlice,
  articlesCount: articlesCountSlice,
  newsDetails: newsDetailsSlice,
  checkMe: checkMeSlice,
  i18n: i18nSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
