import {randomUUID} from "../../../shared/util/utils";
import {defaultValue, ITodo} from "../../../shared/model/todo.model";
import {Action} from "../../../shared/model/action.model";

export const ACTION_TYPES = {
    ADD_TODO: 'todo/ADD_TODO',
    TOGGLE_TODO: 'todo/TOGGLE_TODO',
    DELETE_TODO: 'todo/DELETE_TODO'
};

const initialState: ReadonlyArray<ITodo> = [];

export type TodoState = typeof initialState;

const todoReducer = (state: TodoState = initialState, action: Action<ITodo>): TodoState => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO:
            return [...state, action.payload];
        case ACTION_TYPES.TOGGLE_TODO:
            const todosCopy = [...state];
            let targetTodo: ITodo = todosCopy.find((todo: ITodo) => todo.id === action.payload.id) || defaultValue;
            targetTodo.completed = !targetTodo.completed;
            return todosCopy;
        case ACTION_TYPES.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
};

export default todoReducer;


export const addTodo = (content: string) => {
    return {
        type: ACTION_TYPES.ADD_TODO,
        payload: {
            id: randomUUID(),
            content: content,
            completed: false
        }
    };
};

export const toggleTodo = (id: string): Action<ITodo> => {
    return {
        type: ACTION_TYPES.TOGGLE_TODO,
        payload: {
            id: id
        }
    };
};

export const deleteTodo = (id: string): Action<ITodo> => {
    console.log(id);
    return {
        type: ACTION_TYPES.DELETE_TODO,
        payload: {
            id: id
        }
    }
}