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
  async (dataPayload) => {
    const { todoId, newTodo } = dataPayload;
    await todoServices.update(todoId, newTodo);
    const snap = await todoServices.fetchTodo(todoId);
    const data = {
      ...snap.data(),
      id: snap.id
    };

    return data;
  }
);

export const addTodo = createAsyncThunk(
  'todo/addTodo',
  async (dataPayload) => {
    const query = await todoServices.store(dataPayload);
    const snap = await todoServices.fetchTodo(query.id);
    const data = {
      ...snap.data(),
      id: snap.id
    };

    return data;
  }
);
