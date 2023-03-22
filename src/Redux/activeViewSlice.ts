import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { NEWS_VIEWS, TNewsView } from '../utils/newsViews';

const initialState: TNewsView['value'] = NEWS_VIEWS[0].value;

export const activeViewSlice = createSlice({
  name: 'activeView',
  initialState,
  reducers: {
    changeActiveView: (state, action: PayloadAction<TNewsView['value']>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeActiveView } = activeViewSlice.actions;
export default activeViewSlice.reducer;
