/* eslint-disable no-param-reassign */
import { fetchTodos } from './thunks';

const fetchTodosHandler = {
  [fetchTodos.pending]: (state) => {
    state.loading = true;
  },
  [fetchTodos.fulfilled]: (state, action) => {
    state.list = action.payload;
    state.loading = false;
  },
  [fetchTodos.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
};

export default {
  ...fetchTodosHandler,
};
