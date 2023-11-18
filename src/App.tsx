import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import NotFound from './pages/NotFound';
import Contact from './routes/Contact';
import DbExplorer from './routes/DbExplorer';
import Dashboard from './routes/Dashboard';
import History from './routes/History';
import Scheduling from './routes/Scheduling';
import Modals from './routes/Modals';
import Login from './routes/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'dbexplorer',
        element: <DbExplorer />,
      },
      {
        path: 'history',
        element: <History />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'scheduling',
        element: <Scheduling />,
      },
      {
        path: 'modals',
        element: <Modals />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
