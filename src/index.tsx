import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage';
import { ToDoListPage } from './pages/ToDoListPage';

import './assets/scss/normalize.scss';
import './assets/scss/style.scss';

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
          component={HomePage}
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
