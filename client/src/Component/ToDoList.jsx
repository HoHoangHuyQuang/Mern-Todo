import React from "react";
import { Link } from "react-router-dom";

import { getAllToDos } from "../Api";
import { ToDoCard } from "./ToDoCard";
import axios from "axios";

function TodoList() {
  const [todo, setTodo] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getAllToDos();
      setTodo(data);
    };
    fetchData();
  }, []);

  function handleDeleteClick(todoId) {
    axios.delete(`http://localhost:5000/api/todo/${todoId}`);
    setTodo((data) => {
      return data.filter((todo) => todo.id !== todoId);
    });
  }
  function handleChecked(todoId) {
    axios.put(`http://localhost:5000/api/todo/${todoId}/done`);
    setTodo((data) => {
      return data.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <React.Fragment>
      <div className="container">
        <h2>
          What will u do today
          <Link to="/create" className="button-new">
            <button className="create-button">+ Add</button>
          </Link>
        </h2>

        <div className="todo-list">
          <ul className="todo-item">
            {todo.map((data) => (
              <ToDoCard data={data} handleChecked={handleChecked}  handleDelete={handleDeleteClick}/>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TodoList;
