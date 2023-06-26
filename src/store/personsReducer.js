const initialState = {
    persons: [],
  };
  
  export const personsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_PERSONS':
        return {
          ...state,
          persons: [ ...action.payload],
        }
      case 'ADD_PERSON':
        return {
            ...state,
            ...state.persons.push(action.payload),
          }
      case 'DELETE_PERSON':
        return {
          ...state,
          persons: state.persons.filter(person => person.email !== action.payload),
        }
      default:
        return state;
    }
  };