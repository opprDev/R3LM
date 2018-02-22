import { ADD_LIST, REMOVE_LIST } from '../constants/ActionTypes';

export default function counter(state = 0, action) {
  switch (action.type) {
  case ADD_LIST:
    return state + 1;
  case REMOVE_LIST:
    return state - 1;
  default:
    return state;
  }
}
