import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./Component/ToDoList";
import { CreateToDo } from "./Component/CreateToDoForm";
import { UpdateToDo } from "./Component/UpdateToDoForm";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/create-todo" component={CreateToDo} />
          <Route path="/update-todo" component={UpdateToDo} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
