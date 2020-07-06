import React from "react";

export default function TodoItem(props) {
    return (
        <li style={{ display: "flex" }}>
            <span>{props.title}</span>
            <div
                style={{
                    cursor: "pointer",
                    marginLeft: "20px",
                    display: "flex"
                }}
            >
                <div style={{ marginRight: "10px" }}>Edit</div>
                <div onClick={() => props.onDelete(props)}>Del</div>
            </div>
        </li>
    );
}
