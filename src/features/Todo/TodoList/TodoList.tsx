import React, { FC } from "react";
import { Todo } from "../../../types";
import TodoItem from "../../../components/TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../redux-hooks";
import { removeTodo, toggleTodo } from "../todoSlice";

const TodoList: FC = (): JSX.Element => {
  const list = useAppSelector((state) => state.todos);
  // console.log(list);
  
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo["id"]) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };
  return (
    <ul>
     {
        list.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={handleToggleTodo}
            removeTodo={handleRemoveTodo}
          />
        ))
      }
    </ul>
  );
};

export default TodoList;
