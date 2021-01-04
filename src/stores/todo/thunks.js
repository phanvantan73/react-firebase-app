import { createAsyncThunk } from '@reduxjs/toolkit';
import { todoServices } from '../../services';

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async () => {
    const snap = await todoServices.fetchTodos();
    const data = snap.docs.map((doc) => ({...doc.data(), id: doc.id}));

    return data;
  }
);

export const fetchTodo = createAsyncThunk(
  'todo/fetchTodo',
  async (todoId) => {
    const snap = await todoServices.fetchTodo(todoId);
    const data = {
      ...snap.data(),
      id: snap.id
    };

    return data;
  },
);

export const updateTodo = createAsyncThunk(
  'todo/updateTodo',
  async (todoId, newTodo) => {
    console.log(todoId, newTodo);
    await todoServices.update(todoId, newTodo);

    return newTodo;
  }
);
