import React from "react";

export const ToDoCard = ({ data }) => {
  const { _id, title, text } = data;
  return (
    <React.Fragment>
      <li key={_id}>
        <div className="todo-content">
          <div>
            <h3>{title}</h3>
            <p>text</p>
          </div>
          <span>
            <a href="#">edit</a>| <a href="#">delete</a>
          </span>
        </div>
      </li>
    </React.Fragment>
  );
};
