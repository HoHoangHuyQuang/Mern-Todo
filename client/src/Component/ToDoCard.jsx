import React from "react";

export const ToDoCard = ({data})=> {
    const { _id, title, text } = data;
    return (        
        <React.Fragment>
            <li key={_id}>
            <div className="title-description">
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="">edit</a>| 
                <a href="">delete</a>
            </div>
            </li>
        </React.Fragment>
    );
}