import { ADD_LIST, DELETE_LIST, EDIT_LIST } from '../constants/ActionTypes';

const lists = (state = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case DELETE_LIST:
      return state.filter(list =>
        list.id !== action.id
      )
    default:
      return state
  }
}
 
export default lists
