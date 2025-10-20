import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToDoListPage } from './pages/ToDoListPage';

import './assets/scss/normalize.scss';
import './assets/scss/style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDoListPage />
  </React.StrictMode>
);
