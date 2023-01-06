import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { counterReducer } from './store/reducers/counter.reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const counterStore = createStore(counterReducer);

root.render(
  <React.StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

