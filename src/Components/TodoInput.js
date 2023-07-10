// TodoInput.js

import { v4 } from "uuid";
import { useState } from "react";
import "./TodoInput.css";
import { PlusIcon } from '@heroicons/react/outline';

function TodoInput({todos, setTodos}) {
    const [todo, setTodo] = useState("");

    const handleClick = () => {
        if (todo.length > 0) {
            //id, name, isCompleted?
            const newTodo = {
                id: v4(),
                name: todo,
                isCompleted: false,
            };
            const newTodos = [...todos, newTodo];
            setTodos(newTodos);
            setTodo("");
        }
    };

    return (
        <div className="todo-input-wrapper">
            <input type="text" value={todo} onChange={(event) => {
                setTodo(event.target.value);
            }} placeholder="Enter your todo..." />
            <button onClick={handleClick}>
                <PlusIcon className="plus-icon" />
            </button>
        </div>
    )
}

export default TodoInput;