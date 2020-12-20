import { createAsyncThunk } from '@reduxjs/toolkit';
import { homeServices } from '../../services';

export const fetchUsers = createAsyncThunk(
  'home/fetchUsers',
  async () => {
    const snap = await homeServices.fetchUsers();
    const data = snap.docs.map((doc) => ({...doc.data(), id: doc.id}));

    return data;
  },
);
