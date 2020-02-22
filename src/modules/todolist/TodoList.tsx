import React from 'react';
import Todo from "./Todo";
import {getTodosByVisibilityFilter, getVisibilityFilter} from "./reducers/selectors";
import {RootState} from "../../shared/reducers";
import {ITodo} from "../../shared/model/todo.model";
import {connect} from "react-redux";

export interface Props extends StateProps {
}

const TodoList = ({todos}: Props) => {
    return (
        <div>
            {
                todos && todos.length ? todos.map(((todo: ITodo, index: number) =>
                    <Todo todo={todo} key={index}/>))
                    : `No items`
            }
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    const visibilityFilter = getVisibilityFilter(state);
    return {
        todos: getTodosByVisibilityFilter(state, visibilityFilter)
    };
};

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(TodoList)