import { ADD_TODO, ADD_TEXT, REMOVE_TODO, DISABLE_TODO, MOVE_TODO } from "../constants/constants";

export const todoText = (text) => {
  return {
    type: ADD_TEXT,
    text: text
  }
};

export const newTodo = (item) => {
  return {
    type: ADD_TODO,
    item: item
  }
};


export const completeTodo = (item) => {
  return {
    type: REMOVE_TODO,
    item
  }
};

export const holdOverTodo = (index) => {
  return {
    type: DISABLE_TODO,
    index
  }
};

export const movedTodo = (oldIndex, newIndex) => {
  return {
    type: MOVE_TODO,
    payload: { oldIndex, newIndex }
  }
};


