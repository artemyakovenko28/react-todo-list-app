import React from 'react';
import {connect} from "react-redux";
import "../../index.css"
import {deleteTodo, toggleTodo} from "./reducers/todo.reducer";
import {ITodo} from "../../shared/model/todo.model";

type Props = {
    todo: ITodo
}
& typeof mapDispatchToProps

const Todo = ({todo, toggleTodo, deleteTodo}: Props) => {

    return (
        <div>
            <input type="checkbox"
                   id={todo.id}
                   onClick={() => toggleTodo(todo.id)}/>
            <label htmlFor={todo.id}>{todo.content}</label>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
    );
};

const mapDispatchToProps = {
    toggleTodo,
    deleteTodo
};

export default connect(null, mapDispatchToProps)(Todo)
