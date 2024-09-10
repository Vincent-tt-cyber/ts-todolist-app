import React from "react";
import { Todo } from "../../types";

interface ITodoItemProps extends Todo {
  style?: React.CSSProperties;
  toggleTodo: (id: Todo["id"]) => void;
  removeTodo: (id: Todo["id"]) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({
  id,
  title,
  completed,
  style,
  toggleTodo,
  removeTodo,
}): JSX.Element => {
  return (
    <li style={{ color: "#000", display: "flex", gap: "10px", ...style }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </span>
      <button
        onClick={() => removeTodo(id)}
        style={{
          cursor: "pointer",
          color: "#f00",
          fontSize: "16px",
          ...style,
        }}
      >
        &times;
      </button>
    </li>
  );
};

export default TodoItem;
