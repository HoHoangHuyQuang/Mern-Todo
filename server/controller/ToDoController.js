import { ToDoService } from "../service/ToDoService.js";

export const getTodos = async (req, res) => {
  let page = req.query.page ? parseInt(req.query.page, 10) : 1;
  let filters = {};
  if (req.query.title) {
    filters.title = req.query.title;
    page = 1;
  }
  try {
    const data = await ToDoService.getTodos({ filters, page });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving " + `${error}` });
  }
};

export const getTodoById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await ToDoService.getToDoById(id);
    if (!data) {
      res.status(404).send({ message: "Not found with id: " + id });
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving " + `${error}` });
  }
};

export const createToDo = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  try {
    await ToDoService.createToDo(
      req.body.title,
      req.body.text,
      req.body.isCompleted
    ).then(res.status(201).send({ message: "create successfully" }));
  } catch (error) {
    res.status(500).send({ message: "Error retrieving " + `${error}` });
  }
};

export const updateToDo = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const id = req.params.id;
  try {
    
    await ToDoService.updateToDo(
      id,
      req.body.title,
      req.body.text,
      req.body.isCompleted
    ).then(res.status(201).send({ message: "update successfully" }));
  } catch (error) {
    res.status(500).send({ message: "Error retrieving " + `${error}` });
  }
};

export const markDoneToDo = async (req, res) => { 
  const id = req.params.id;
  try {
    const data = await ToDoService.getToDoById(id);
    await ToDoService.updateToDo(
      id,
      data.title,
      data.text,
      true
    ).then(res.status(201).send({ message: "update successfully" }));
  } catch (error) {
    res.status(500).send({ message: "Error retrieving " + `${error}` });
  }
};

// export const deleteTodoById = async (req, res) => {
//   const id = req.params.id;
//   const todo = await ToDoModel.findOneAndRemove({ _id: id })
//     .then((data) => {
//       if (!data) res.status(404).send({ message: "Not found with id: " + id });
//       else res.send({ message: "delete successfully item: " + id });
//     })
//     .catch((err) => {
//       res.status(500).send({ message: "Error retrieving " + `${err}` });
//     });
// };
export const deleteTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    await ToDoService.deleteTodo(id).then(
      res.status(200).send({ message: "delete successfully" })
    );
  } catch (error) {
    res.status(500).send({ message: "Error retrieving " + `${error}` });
  }
};
