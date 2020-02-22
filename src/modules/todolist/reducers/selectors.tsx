import {TODO_FILTER} from "./visibility-filter.reducer";
import {RootState} from "../../../shared/reducers";

export const getAllTodos = (store: RootState) => {
    return store.todo;
};

export const getTodosByVisibilityFilter = (store: RootState, visibilityFilter: string) => {
    const todosList = getAllTodos(store);
    switch (visibilityFilter) {
        case TODO_FILTER.COMPLETED:
            return todosList.filter(todo => todo.completed);
        case TODO_FILTER.INCOMPLETE:
            return todosList.filter(todo => !todo.completed);
        default:
            return todosList;
    }
};

export const getVisibilityFilter = (store: RootState) => {
    return store.visibilityFilter;
};