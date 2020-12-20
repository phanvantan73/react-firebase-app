import { createSelector } from '@reduxjs/toolkit';

const homeSelector = (state) => state.home;

export const homeLoadingSelector = createSelector([homeSelector], (state) => state.loading);

export const usersSelector = createSelector([homeSelector], (state) => state.users);
