import React from "react";

export const UpdateToDo=()=>{
    const [data, setData] = React.useState({ title: "", text: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    
}