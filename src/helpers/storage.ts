import { RootState } from '../store';

export const saveToLocalStorage = (state: RootState) => {
  try {
    const appState = JSON.stringify(state);
    localStorage.setItem('appState', appState);
  } catch (e) {
    console.warn(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const appState = localStorage.getItem('appState');
    if (!appState) return undefined;
    return { toDoList: JSON.parse(appState) };
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};
