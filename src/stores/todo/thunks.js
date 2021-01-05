import { createAsyncThunk } from '@reduxjs/toolkit';

import { todoServices } from '../../services';
import { convertResponseData } from '../../utils/helper';

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async () => {
    const response = await todoServices.fetchTodos();
    const data = response.docs.map((doc) => convertResponseData(doc));

    return data;
  }
);

export const fetchTodo = createAsyncThunk(
  'todo/fetchTodo',
  async (todoId) => {
    const response = await todoServices.fetchTodo(todoId);
    const data = convertResponseData(response);

    return data;
  },
);

export const updateTodo = createAsyncThunk(
  'todo/updateTodo',
  async (dataPayload) => {
    const { todoId, newTodo } = dataPayload;
    await todoServices.update(todoId, newTodo);
    const response = await todoServices.fetchTodo(todoId);
    const data = convertResponseData(response);

    return data;
  }
);

export const addTodo = createAsyncThunk(
  'todo/addTodo',
  async (dataPayload) => {
    const result = await todoServices.store(dataPayload);
    const response = await todoServices.fetchTodo(result.id);
    const data = convertResponseData(response);

    return data;
  }
);
