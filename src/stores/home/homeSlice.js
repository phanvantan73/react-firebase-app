/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import extraReducers from './extraReducers';

const initialState = {
  loading: true,
  users: [],
  error: {},
  currentUser: null,
};

const appSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    toggleLoading(state) {
      state.loading = !state.loading;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers,
});

export const { toggleLoading, setCurrentUser } = appSlice.actions;

export default appSlice.reducer;
