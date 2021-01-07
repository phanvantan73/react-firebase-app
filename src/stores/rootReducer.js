import { combineReducers } from '@reduxjs/toolkit';

import homeReducer from './home/homeSlice';
import todoReducer from './todo/todoSlice';

const rootReducer = combineReducers({
  home: homeReducer,
  todo: todoReducer,
});

export default rootReducer;
