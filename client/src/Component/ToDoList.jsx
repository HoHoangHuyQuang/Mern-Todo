import React from "react";
import { Link } from "react-router-dom";

import { getAllToDos } from "../Api";
import { ToDoCard } from "./ToDoCard";

export function TodoList() {
  const [infoTodo, setInfoTodo] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getAllToDos();
      setInfoTodo(data);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <h2>What will u do today  <button >+ Add</button> </h2>
        
        <div className="todo-list">
          <ul className="todo-item">
            {infoTodo.map((data) => (
              <ToDoCard data={data} />
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TodoList;
