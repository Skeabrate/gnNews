import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  news: null,
};

export const newsDetailsSlice = createSlice({
  name: 'activeView',
  initialState,
  reducers: {
    toggleModal: (state) => {
      return { ...state, isOpen: !state.isOpen };
    },
    setDetails: (state, action: PayloadAction<any>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { toggleModal, setDetails } = newsDetailsSlice.actions;
export default newsDetailsSlice.reducer;
