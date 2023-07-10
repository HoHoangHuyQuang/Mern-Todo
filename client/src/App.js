import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./Component/ToDoList";
import { UpdateToDo } from "./Component/UpdateToDoForm";
import { CreateToDo } from "./Component/CreateToDoForm";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/create" Component={CreateToDo} />
          <Route path="/update" component={UpdateToDo} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
