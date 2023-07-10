import React from "react";
import { createToDo } from "../Api";

export const CreateToDo = () => {
  const [data, setData] = React.useState({ title: "", text: "" });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const todoInfo = {
      title: data.title,
      text: data.text,
    };

    console.log({ data });
    await createToDo(todoInfo);
  }
  return (
    <React.Fragment>
      <form
        className="form-container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label className="label" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          className="input"
        />
        <label className="label" htmlFor="description">
          Description
        </label>
        <input
          type="text"
          name="text"
          value={data.text}
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="button">
          create todo
        </button>
      </form>
    </React.Fragment>
  );
};
