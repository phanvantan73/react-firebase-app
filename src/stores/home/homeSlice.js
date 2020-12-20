/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import extraReducers from './extraReducers';

const initialState = {
  loading: true,
  users: [],
  error: {},
};

const appSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    toggleLoading(state) {
      state.loading = !state.loading;
    },
  },
  extraReducers,
});

export const { toggleLoading } = appSlice.actions;

export default appSlice.reducer;
