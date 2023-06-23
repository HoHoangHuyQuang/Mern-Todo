import { ToDoModel } from "../model/ToDo.model.js";

export const getTodos = async (req, res) => {
  try {
    const todo = await ToDoModel.find();

    res.status(200).json({ todo });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const todo = await ToDoModel.findById(req.body.id);
    res.status(200).json({ todo });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createToDo = async (req, res) => {
  try {
    const todo = new ToDoModel({
      title: req.body.title,
      text: req.body.text,
    });
    await todo.save();

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateToDo = async (req, res) => {
  try {
    const tido = await PostModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body.title,
      req.body.text,
      req.body.isCompleted,
      { new: true }
    );

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
