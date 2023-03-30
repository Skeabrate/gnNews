import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { NEWS_VIEWS, TNewsView } from '../../utils/newsViews';

const initialState: TNewsView['id'] = NEWS_VIEWS[0].id;

export const activeViewSlice = createSlice({
  name: 'activeView',
  initialState,
  reducers: {
    changeActiveView: (state, action: PayloadAction<TNewsView['id']>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeActiveView } = activeViewSlice.actions;
export default activeViewSlice.reducer;
