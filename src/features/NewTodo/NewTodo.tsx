import React from "react";
import { useAppDispatch } from "../../redux-hooks";
import { addTodo } from "../Todo/todoSlice";
import NewItem from "../../components/NewTodoForm/NewItem/NewItem";

const NewTodo = () => {
  const dispatch = useAppDispatch();
  const handleNewTodo = (title: string) => {
    dispatch(addTodo(title));
  };

  return (
    <NewItem placeholder="New Todo" handleClick={handleNewTodo} />
  )
};

export default NewTodo;
