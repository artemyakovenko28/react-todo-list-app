import React from 'react';
import './App.css';

import VisibilityFilters from "./modules/todolist/VisibilityFilters";
import TodoAdd from './modules/todolist/TodoAdd';
import TodoList from "./modules/todolist/TodoList";
import Game from "./modules/tic-tac-toe/components/Game";

const App = () => {
    return (
        <div>
            <h1>Todo List</h1>
            <TodoAdd/>
            <TodoList/>
            <VisibilityFilters/>
            <hr/>
            <Game/>
        </div>
    );
};

export default App;
