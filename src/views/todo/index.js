import React, { useState } from "react";
import TodoItem from "components/todo/TodoItem";

const TODOS = [
    {
        title: "#bug 201",
        level: 1
    },
    {
        title: "#bug 202",
        level: 2
    }
];
export default function Todo() {
    const [todos, setTodos] = useState(TODOS);
    const [title, setTitle] = useState("");

    const submit = () => {
        setTodos([
            ...todos,
            {
                title,
                level: 1
            }
        ]);
    };

    const handleDelete = data => {
        const idx = todos.findIndex(todo => todo.title === data.title)
        setTodos(todos.splice(1, idx))
    };
    return (
        <div>
            <h1>Todos</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter todos..."
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <button onClick={submit}>Add +</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        {...todo}
                        onDelete={handleDelete}
                    ></TodoItem>
                ))}
            </ul>
        </div>
    );
}
