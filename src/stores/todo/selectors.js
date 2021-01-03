import { createSelector } from '@reduxjs/toolkit';

const todoSelector = (state) => state.todo;

export const todosSelector = createSelector([todoSelector], (state) => state.list);
