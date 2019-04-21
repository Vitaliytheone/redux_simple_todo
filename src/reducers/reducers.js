import { ADD_TEXT, ADD_TODO, REMOVE_TODO } from "../constants/constants";

const initialState = {
    list: [],
    item: ''
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return {
                ...state,
                item: action.text,
            }
        case ADD_TODO:
            return {
                ...state,
                list: [...state.list, state.item],
                item: ''
            }
        case REMOVE_TODO: {
            return {
                ...state,
                list: action.list
            }
        }
        default: return state;
    }
}