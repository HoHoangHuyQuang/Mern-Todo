import "./App.css";
import TodoList from "./Component/ToDoList";
import { getAllToDos } from "./Api";
import { useEffect } from "react";

function App() {

  useEffect(() => {
      getAllToDos();
  }, []);

  return (
    <div className="App">
     <TodoList  />
    </div>
  );
}

export default App;
