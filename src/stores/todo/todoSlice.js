import { createSlice } from '@reduxjs/toolkit';

import extraReducers from './extraReducers';

const initialState = {
  list: [],
  todo: null,
  error: {},
};

const appSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    updateStatusTodo(state, action) {
      state.todo.done = action.payload;
    },
  },
  extraReducers,
});

export const { updateStatusTodo } = appSlice.actions;

export default appSlice.reducer;
