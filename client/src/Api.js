import axios from "axios";

const baseURL = "http://localhost:5000";

export const getAllToDos = async () => {
  const todos = await axios
    .get(baseURL + "/todo")
    .then((response) => response.data)
    .catch((err) => console.log(err));

    // console.log(todos);
    return todos;
};

export const getToDoById = async (id) => {
    const todo = await axios
      .get(baseURL + "/todo/"+ id)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  
      // console.log(todos);
      return todo;
  };

export const createToDo = async () => {
    const todos = await axios
      .get(baseURL + "/todo")
      .then((response) => response.data)
      .catch((err) => console.log(err));
  
      // console.log(todos);
      return todos;
  };
  