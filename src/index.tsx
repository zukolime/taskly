import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage';
import { ToDoListPage } from './pages/ToDoListPage';

import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDo } from './models/todo-item';

const todos: ToDo[] = [
  {
    id: 0,
    text: 'Первое действие',
    isDone: false,
  },
  {
    id: 1,
    text: 'Второе действие',
    isDone: true,
  },
  {
    id: 2,
    text: 'Третье действие',
    isDone: false,
  },
  {
    id: 3,
    text: 'Четвертое действие',
    isDone: true,
  },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={() => <HomePage todos={todos} />}
        />
        <Route
          exact
          path='/todo'
          component={ToDoListPage}
        />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
