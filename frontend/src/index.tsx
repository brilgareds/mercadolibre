import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

import './index.css';
import { store } from './store/';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
