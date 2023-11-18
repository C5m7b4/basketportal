import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'regenerator-runtime/runtime';
import { App } from './App';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

if (root) {
  root.render(
    <Provider store={store}>
      <ToastContainer />

      <App />
    </Provider>
  );
}
