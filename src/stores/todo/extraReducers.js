import { fetchTodos, fetchTodo, updateTodo, addTodo } from './thunks';

const fetchTodosHandler = {
  [fetchTodos.pending]: () => {},
  [fetchTodos.fulfilled]: (state, action) => {
    state.list = action.payload;
  },
  [fetchTodos.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

const fetchTodoHandler = {
  [fetchTodo.pending]: () => {},
  [fetchTodo.fulfilled]: (state, action) => {
    state.todo = action.payload;
  },
  [fetchTodo.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

const updateTodoHandler = {
  [updateTodo.pending]: () => {},
  [updateTodo.fulfilled]: (state, action) => {
    state.todo = action.payload;
  },
  [updateTodo.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

const addTodoHandler = {
  [addTodo.pending]: () => {},
  [addTodo.fulfilled]: (state, action) => {
    state.todo = action.payload;
  },
  [addTodo.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

export default {
  ...fetchTodosHandler,
  ...fetchTodoHandler,
  ...updateTodoHandler,
  ...addTodoHandler,
};
