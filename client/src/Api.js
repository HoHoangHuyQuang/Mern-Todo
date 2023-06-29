import axios from "axios";

const baseURL = "http://localhost:5000";

export const getAllToDos = async () => {
  const todos = await axios
    .get(baseURL + "/api/todo")
    .then((response) => response.data)
    .catch((err) => console.log(err));

  // console.log(todos);
  return todos;
};

export const getToDoById = async (id) => {
  const todo = await axios
    .get(baseURL + "/api/todo/" + id)
    .then((response) => response.data)
    .catch((err) => console.log(err));

  // console.log(todos);
  return todo;
};

export const createToDo = async (todoInfo) => {
  const todos = await axios
    .post(baseURL + "/api/todo", todoInfo)
    .then((response) => response.data)
    .catch((err) => console.log(err));

  // console.log(todos);
  return todos;
};

export const updateToDo = async (id, todoInfo) => {
  const todos = await axios
    .put(baseURL + "/api/todo/"+ id, todoInfo)
    .then((response) => response.data)
    .catch((err) => console.log(err));

  // console.log(todos);
  return todos;
};

export const deleteToDo = async (id) => {
  const todos = await axios
    .delete(baseURL + "/api/todo/"+ id)
    .then((response) => response.data)
    .catch((err) => console.log(err));

  // console.log(todos);
  return todos;
};