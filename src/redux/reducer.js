import * as actionTypes from "./actionType";

const initState = {
  todoList: [],
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload),
      };
    case actionTypes.DEL_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.key !== action.payload),
      };
    default:
      return state;
  }
  return state;
};
