import * as types from '../constants/ActionTypes';

let nextListId = 0;

export const addList = (text) => {
  return {
    type: types.ADD_LIST,
    id: nextListId++,
    text
  };
}

export const deleteList = (id) => {
  return {
    type: types.DELETE_LIST,
    id
  };
}

export const editList = (id, text) => {
  return {
    type: types.EDIT_LIST,
    id,
    text
  };
}
