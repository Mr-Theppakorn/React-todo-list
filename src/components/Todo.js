import React, { useState } from 'react';
import TodoList from './TodoList';

function Todo({ text, todo, todos, setTodos }) {

    const onDeleteText = (e) => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        console.log(todo);
    };

    const completeTodo = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        })
        );
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeTodo} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={onDeleteText} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
};

export default Todo;

