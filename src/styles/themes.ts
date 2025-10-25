import { Theme, Themes } from '../models/theme';

const light: Theme = {
  name: 'light',
  colors: {
    backgroundPrimary: '#ffffff',
    backgroundSecondary: '#f7f8fa',
    text: '#000000ff',
    accent: '#eb72cdff',
  },
};

const dark: Theme = {
  name: 'dark',
  colors: {
    backgroundPrimary: '#bcbcbc',
    backgroundSecondary: '#1d1d1d',
    text: '#e6edf3',
    accent: '#497d21',
  },
};

export const themes: Themes = { light, dark };
