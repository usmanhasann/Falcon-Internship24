import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodoTask } from "./components/TodoTask";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <TodoList />
      <TodoTask />
    </>
  );
}

export default App;
