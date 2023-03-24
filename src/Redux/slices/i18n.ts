import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCALES } from '../../i18n/locales';

const initialState = window.localStorage.getItem('lang') || LOCALES.POLISH;

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state = action.payload;
      window.localStorage.setItem('lang', action.payload);
      return state;
    },
  },
});

export const { changeLanguage } = i18nSlice.actions;
export default i18nSlice.reducer;
