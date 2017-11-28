import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import App from './App';
import rootReducer from "./rootReducer"
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk, logger), window.devToolsExtension())

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,   
document.getElementById('root'));
registerServiceWorker();
