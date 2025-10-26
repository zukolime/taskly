import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { NotFound } from './pages/404/404';
import { ViewList } from './pages/ViewList';
import { ViewListItem } from './pages/ViewListItem/ViewListItem';
import { ToDoListPage } from './pages/ToDoListPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <ToDoListPage />,
      },

      {
        path: '/list',
        element: <ViewList />,
      },

      {
        path: '/list/:id',
        element: <ViewListItem />,
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
