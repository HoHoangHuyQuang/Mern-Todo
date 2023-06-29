import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./Component/ToDoList";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
