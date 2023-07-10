//TodoList.js

import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList() {
    const [todos, setTodos] = useState([]);
    return (
        <div className="TodoList-container">
            <h2>My Todos</h2>
            <TodoInput todos={todos} setTodos={setTodos} />
            <div className="TodoItems-wrapper">
                {todos.map((item, index) => {
                    return <TodoItem
                        todos={todos}
                        setTodos={setTodos}
                        index={index + 1}
                        key={item.id}
                        todo={item} />;
                })}
            </div>
        </div>
    );
}

export default TodoList;