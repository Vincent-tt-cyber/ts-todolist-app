import React, { useEffect } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem/TodoItem";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";
import { Todo } from "./types";
import TodoList from "./components/TodoList/TodoList";

function App() {
  // const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState<Todo[]>([]);

  // const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setText(event.target.value);
  // };

  const toggleTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title: text,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    // setText("");
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
  //     (response) => {
  //       response.json().then((data: Todo[]) => {
  //         setTodos(data);
  //       });
  //     }
  //   );
  // }, []);

  return (
    <main>
      <NewTodoForm
        // value={text}
        // onChange={handleInput}
        handleClick={addTodo}
      />
      <hr />
      <TodoList toggleTodo={toggleTodo} removeTodo={removeTodo} todos={todos} />
    </main>
  );
}

export default App;
