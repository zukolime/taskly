import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ToDo } from '../models/todo-item';

export interface ToDoState {
  todos: ToDo[];
}

const initialState: ToDoState = {
  todos: [],
};

export const toDoSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    createAction: (state) => {},

    updateAction: (state) => {},

    deleteAction: (state, action: PayloadAction<number>) => {},
  },
});

export const { createAction, updateAction, deleteAction } = toDoSlice.actions;

export default toDoSlice.reducer;
