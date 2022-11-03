import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

let store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  )
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
