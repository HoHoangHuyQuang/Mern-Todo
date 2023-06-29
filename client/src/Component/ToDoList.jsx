import React from "react";
import { Link } from "react-router-dom";

import { getAllToDos } from "../Api";
import { ToDoCard } from "./TodoCard";

export function TodoList() {
  const [infoTodo, setInfoTodo] = React.useState([]);
  
  React.useEffect(() => {
    const fetchData = async () =>{
      const data = await getAllToDos();
      setInfoTodo(data);
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <section className="todo-container" style={{ align: "center" }}>
        <h2>What will u do today</h2>

        <section className="todo-data">
          <ul className="todo-list-block">
            {infoTodo.map((data) => (
              <ToDoCard data={data} />
            ))}
          </ul>
        </section>
      </section>
    </React.Fragment>
  );
}

export default TodoList;
