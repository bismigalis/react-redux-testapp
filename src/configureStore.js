import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers';

export default function configureStore() {
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./reducers/index', () => {
  //     const nextRootReducer = combineReducers(require('./reducers/index'));
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
  // const reducer = combineReducers(require('./reducers/index'));
  // const store = createStore(reducer, initialState);
  // return store;

   const initialState = {
      // form: {title: ''
      // },

      films: [{'title': 'Terminator',
                                  year: 1987,
                                  genre: 'Action',
                                  rating: 3},
                                 {'title': 'Predator',
                                  year: 1990,
                                  genre: 'Fiction',
                                  rating: 4}
                             ]
                     };
  const store = createStore(rootReducer, initialState);
  if(module.hot) {
     // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/', () => {
      const nextReducer = require('./reducers/index').default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
