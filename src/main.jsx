import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.css';
import { RestCountries } from './RestCountries';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RestCountries />
    </Provider>
  </React.StrictMode>
);
