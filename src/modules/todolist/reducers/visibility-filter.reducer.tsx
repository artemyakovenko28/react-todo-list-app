export const TODO_FILTER = {
    ALL: 'all',
    COMPLETED: 'completed',
    INCOMPLETE: 'incomplete'
};

export const ACTION_TYPES = {
    UPDATE_TODO_FILTER: 'todoFilter/UPDATE_VISIBILITY_FILTER'
};

const initialState = TODO_FILTER.ALL;

export type VisibilityFilterState = typeof initialState;

const visibilityFilterReducer = (state = TODO_FILTER.ALL, action: any) => {
    const { type, payload } = action;
    if (type === ACTION_TYPES.UPDATE_TODO_FILTER) {
        return payload;
    } else {
        return state;
    }
};

export default visibilityFilterReducer;


export const updateVisibilityFilter = (value: string) => {
    return {
        type: ACTION_TYPES.UPDATE_TODO_FILTER,
        payload: value
    }
};