import { ADD_TODO, ADD_TEXT, REMOVE_TODO } from "../constants/constants";

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


export const completeTodo = (list) => {
    return {
        type: REMOVE_TODO,
        list: list
    }
};


