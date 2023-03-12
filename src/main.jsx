import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePageMain } from './componets';
import './index.css';
import { RestCountries } from './RestCountries';
import { store } from './store/store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RestCountries />
    </Provider>
  </React.StrictMode>
);
