import { createSlice } from '@reduxjs/toolkit';

import { Theme } from '../models/theme';
import { themes } from '../styles/themes';

export interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: themes['light'],
};

export const themeSlice = createSlice({
  name: 'ToDoTheme',
  initialState,
  reducers: {
    toggleThemeAction: (state) => {
      state.theme =
        state.theme.name === 'light' ? themes['dark'] : themes['light'];
    },
  },
});

export const { toggleThemeAction } = themeSlice.actions;

export default themeSlice.reducer;
