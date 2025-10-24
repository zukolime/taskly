import { configureStore } from '@reduxjs/toolkit';

import toDoReducer, { ToDoState } from './features/toDoListSlice';
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage';
import formReducer from './features/formSlice';

interface PreloadedState {
  toDoList: ToDoState;
}

export const store = configureStore({
  reducer: {
    toDoList: toDoReducer,
    form: formReducer,
  },

  preloadedState: loadFromLocalStorage() as PreloadedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
