import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList';

function TodoForm({ todos, setTodos, inputText, setInputText, setStatus }) {
    const inputTextChange = (e) => {
        setInputText(e.target.value);
    };
    const onInputSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 10000 },
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextChange} type="text" className="todo-input" />
            <button onClick={onInputSubmit} className="todo-btn" type="submit"><i className="fas fa-plus-square"></i></button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

        </form>
    );
}

export default TodoForm;

