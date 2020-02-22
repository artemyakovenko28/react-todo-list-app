import React from 'react';
import {connect} from "react-redux";
import {addTodo} from "./reducers/todo.reducer";

export interface Props extends DispatchProps {
}

const TodoAdd = ({addTodo}: Props) => {

    const handleClick = (inputElement: HTMLInputElement) => {
        addTodo(inputElement.value);
        inputElement.value = '';
    };

    return (
        <div>
            <input type="text" id="todoInput"/>
            <button onClick={() => handleClick(document.getElementById('todoInput') as HTMLInputElement)}>
                Add Todo
            </button>
        </div>
    );
};

const mapDispatchToProps = {
    addTodo
};

type DispatchProps = typeof mapDispatchToProps

export default connect(null, mapDispatchToProps) (TodoAdd)