import "./App.css";
import TodoList from "./features/Todo/TodoList/TodoList";
import NewTodo from "./features/NewTodo/NewTodo";

function App() {
  return (
    <main>
      <NewTodo />
      <hr />
      <TodoList />
    </main>
  );
}

export default App;
