import { ToDoModel } from "../model/ToDo.model.js";

export const getTodos = async (req, res) => {
  //   /todo || /todo?title=...
  const title = req.query.title;

  let condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  const todo = await ToDoModel.find(condition)
    .then((data) => {
      if (!data) res.status(204).send({ message: "Content Not found" });
      else res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving " + `${err}` });
    });
};

export const getTodoById = async (req, res) => {
  const id = req.params.id;
  const todo = await ToDoModel.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found with id: " + id });
      else resres.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving " + `${err}` });
    });
};

export const createToDo = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const newToDo = new ToDoModel({
    title: req.body.title,
    text: req.body.text,
    isCompleted: req.body.isCompleted ? req.body.isCompleted : false,
  });
  newToDo
    .save(newToDo)
    .then(() => res.status(201).send({ message: "create successfully" }))
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving " + `${err}` });
    });
};

export const updateToDo = async (req, res) => {
  const id = req.params.id;
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const todo = await ToDoModel.findOneAndUpdate({ _id: id }, req.body)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found with id: " + id });
      else res.status(201).send({ message: "update successfully" });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving " + `${err}` });
    });
};

export const deleteTodoById = async (req, res) => {
  const id = req.params.id;
  const todo = await ToDoModel.findOneAndRemove({ _id: id })
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found with id: " + id });
      else res.send({ message: "delete successfully item: " + id });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving " + `${err}` });
    });
};
