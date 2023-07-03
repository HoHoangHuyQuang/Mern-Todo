import React from "react";
import { Link } from "react-router-dom";

export const ToDoCard = ({ data, handleChecked, handleDelete }) => {
  const { _id, title, text } = data;
  return (
    <React.Fragment>
      <div className="clear"></div>
      <li key={_id}>
        <div className="todo-content">
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name={_id} onChange={(e)=> {if(e.target.checked) handleChecked(_id)}}></input>
                </td>
                <td>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <span>
            <Link to="/update-todo">
              <button className="edit-button">edit</button>|
            </Link>
            <button className="delete-button" onClick={() => handleDelete(_id)}>
              delete
            </button>
          </span>
        </div>
      </li>
    </React.Fragment>
  );
};
