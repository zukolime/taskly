import { configureStore } from '@reduxjs/toolkit';

import toDoReducer, { ToDoState } from './features/toDoList';
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage';

interface PreloadedState {
  toDoList: ToDoState;
}

export const store = configureStore({
  reducer: {
    toDoList: toDoReducer,
  },

  preloadedState: loadFromLocalStorage() as PreloadedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
