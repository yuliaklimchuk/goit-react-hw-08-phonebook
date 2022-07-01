import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persistedStore } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={persistedStore.store}>
      <PersistGate loading={null} persistor={persistedStore.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);