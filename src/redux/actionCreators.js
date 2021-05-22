import * as actionTypes from "./actionType";

export const addTodo = (todo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: todo,
  };
};

export const delTodo = (key) => {
  return {
    type: actionTypes.DEL_TODO,
    payload: key,
  };
};
