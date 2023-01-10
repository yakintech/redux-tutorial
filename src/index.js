import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import reducer from './store/reducers'

const root = ReactDOM.createRoot(document.getElementById('root'));

const counterStore = createStore(reducer);

//combine reducer??

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={counterStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

