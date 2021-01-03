import { createAsyncThunk } from '@reduxjs/toolkit';
import { todoServices } from '../../services';

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async () => {
    const snap = await todoServices.fetchTodos();
    const data = snap.docs.map((doc) => ({...doc.data(), id: doc.id}));

    return data;
  },
);
