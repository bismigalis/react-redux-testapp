import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import configureStore from './configureStore';
import 'react-table/react-table.css'


const store = configureStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
