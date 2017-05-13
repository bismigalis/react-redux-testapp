import React from 'react';
import { render } from 'react-dom';
//import { createStore } from 'redux'
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from './reducers';
import configureStore from './configureStore';
import 'react-table/react-table.css'


const store = configureStore(reducer);
//console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
