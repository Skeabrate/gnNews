import { createSlice } from '@reduxjs/toolkit';

export const checkMeSlice = createSlice({
  name: 'checkMe',
  initialState: false,
  reducers: {
    toggleModal: (state) => !state,
  },
});

export const { toggleModal } = checkMeSlice.actions;
export default checkMeSlice.reducer;
