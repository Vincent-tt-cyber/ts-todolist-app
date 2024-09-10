import React from "react";
import { Todo } from "../../types";
import TodoItem from "../TodoItem/TodoItem";

interface ITodoListProps {
  todos: Todo[];
  toggleTodo: (id: Todo["id"]) => void;
  removeTodo: (id: Todo["id"]) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
