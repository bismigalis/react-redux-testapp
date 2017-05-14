const films = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FILM':
     console.log(state);
      return [
        ...state,
        action.data
      ]
    default:
      return state;
  }
}
;
export default films;
