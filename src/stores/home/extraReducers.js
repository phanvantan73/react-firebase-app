/* eslint-disable no-param-reassign */
import { fetchUsers } from './thunks';

const fetchUsersHandler = {
  [fetchUsers.pending]: (state) => {
    state.loading = true;
  },
  [fetchUsers.fulfilled]: (state, action) => {
    state.users = action.payload;
    state.loading = false;
  },
  [fetchUsers.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
};

export default {
  ...fetchUsersHandler,
};
