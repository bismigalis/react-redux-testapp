import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';


import films from './films';
//import form from './form';

const rootReducer = combineReducers({
   films: films,
   //form: formReducer
});

export default rootReducer;
