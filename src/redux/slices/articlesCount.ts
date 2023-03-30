import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = 0;

export const articlesCountSlice = createSlice({
  name: 'articlesCount',
  initialState,
  reducers: {
    updateArticlesCount: (state, action: PayloadAction<number>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateArticlesCount } = articlesCountSlice.actions;
export default articlesCountSlice.reducer;
