import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/app/index';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);
createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
