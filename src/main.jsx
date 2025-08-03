import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//Redux
import { Provider } from 'react-redux';
import { store } from './app/store';
import {BrowserRouter } from 'react-router-dom';
 

//En esta parte se reenderiza la app y pasamos el store global


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
