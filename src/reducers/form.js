import { reducer as formReducer } from 'redux-form';
// const form = (state = [], action) => {
//   switch (action.type) {
//     // case 'ADD_TODO':
//     //   return [
//     //     ...state,
//     //     todo(undefined, action)
//     //   ]
//     // case 'TOGGLE_TODO':
//     //   return state.map(t =>
//     //     todo(t, action)
//     //   )
//     default:
//       return state;
//   }
// }
// ;

var initialState = {title: ''
      };

//const form_reducer = formReducer('form', initialState);
export default formReducer;
