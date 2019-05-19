import { ADD_TEXT, ADD_TODO, REMOVE_TODO, DISABLE_TODO, MOVE_TODO } from "../constants/constants";
import arrayMove from 'array-move';

const initialState = {
    list: [],
    item: '',
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT: {
            return {
                ...state,
                item: action.text,
            }
        }
        case ADD_TODO: {
            return {
                ...state,
                list: [...state.list, { item: state.item, disable: false }],
                item: ''
            }
        }
        case REMOVE_TODO: {
            return {
                ...state,
                list: state.list.filter((itemTodo) => action.item !== itemTodo.item)
            }
        }
        case DISABLE_TODO: {
            return {
                ...state,
                list: state.list.map((item, index) => (index === action.index) ? { ...item, disable: !item.disable } : item)
            }

        }
        case MOVE_TODO: {
            return {
                ...state,
                list: arrayMove(state.list, action.payload.oldIndex, action.payload.newIndex)
            }
        }
        default: return state;
    }
}