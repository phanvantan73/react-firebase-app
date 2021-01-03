/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import extraReducers from './extraReducers';

const initialState = {
  list: [],
  error: {},
};

const appSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers,
});

export const { setCurrentUser } = appSlice.actions;

export default appSlice.reducer;
