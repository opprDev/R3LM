import { ADD_LIST, DELETE_LIST, EDIT_LIST } from '../constants/ActionTypes';

let nextListId = 0;

export const addList = (text) => {
  return {
    type: ADD_LIST,
    id: nextListId++,
    text
  };
}

export const deleteList = (id) => {
  return {
    type: DELETE_LIST,
    id
  };
}

export const editList = (id, text) => {
  return {
    type: EDIT_LIST,
    id,
    text
  };
}
