const films = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FILM':
     console.log(state);
      return [
        ...state,
        action.data
      ]
    // case 'TOGGLE_TODO':
    //   return state.map(t =>
    //     todo(t, action)
    //   )
    default:
      return state;
  }
}
;
export default films;
