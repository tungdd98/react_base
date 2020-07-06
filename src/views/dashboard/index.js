import React, { useState, useEffect } from "react";

export default function Dashboard({ routes }) {
    const [count, setCount] = useState(0);
    const [age] = useState(19);
    const [todos] = useState([{ name: "#bug", level: 1 }]);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <h2>Dashboard</h2>
            <p>You clicked {count} times</p>
            <p>My age: {age}</p>
            <p>Todos</p>
            {todos.map((todo, index) => (
                <div key={index}>{todo.name}</div>
            ))}
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
