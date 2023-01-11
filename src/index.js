import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './store/reducers'



const root = ReactDOM.createRoot(document.getElementById('root'));

const counterStore = createStore(reducer, applyMiddleware(thunk, logger));

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

