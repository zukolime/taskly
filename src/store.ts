import { configureStore } from '@reduxjs/toolkit';

import toDoReducer from './features/toDoList';

export const store = configureStore({
  reducer: {
    toDoList: toDoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
