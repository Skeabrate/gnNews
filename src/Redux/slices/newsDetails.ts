import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TArticle } from '../../types/article';

type TState = {
  isOpen: boolean;
  news: TArticle | null;
};

const initialState: TState = {
  isOpen: false,
  news: null,
};

export const newsDetailsSlice = createSlice({
  name: 'newsDetails',
  initialState,
  reducers: {
    toggleModal: (state) => {
      return { ...state, isOpen: !state.isOpen };
    },
    setDetails: (state, action: PayloadAction<any>) => {
      state = {
        ...state,
        news: action.payload,
      };
      return state;
    },
  },
});

export const { toggleModal, setDetails } = newsDetailsSlice.actions;
export default newsDetailsSlice.reducer;
