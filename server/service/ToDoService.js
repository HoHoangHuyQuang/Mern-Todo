import e from "cors";
import { ToDoModel } from "../model/ToDo.model.js";

const itemsPerPage = 10;

export const ToDoService = class {
  static async getTodos({ filters = null, page = 1 } = {}) {
    let query;
    if (filters) {
      if ("title" in filters) {
        query = {
          title: { $regex: new RegExp(filters["title"]), $options: "i" },
        };
      }
    }
    let displayCursor;
    try {
      displayCursor = await ToDoModel.find(query)
        .limit(itemsPerPage)
        .skip((page - 1) * itemsPerPage)
        .exec();

      return await displayCursor;
    } catch (error) {
      console.error(`Error occour, ${error}`);
      throw new Error(error);
    }
  }

  static async getToDoById(id) {
    try {
      let todoFound = await ToDoModel.findById(id);
      return todoFound;
    } catch (error) {
      console.error(`Error occour, ${error}`);
      throw new Error(error);
    }
  }

  static async createToDo(title, text, isCompleted) {
    try {
      if (title.trim() == "" || title == null) {
        throw new Error("Title must not null");
      }
      const newToDo = new ToDoModel({
        title: title,
        text: text,
        isCompleted: isCompleted == true ? true : false,
      });
      newToDo.save();
    } catch (error) {
      console.error(`Error occour, ${error}`);
      throw new Error(error);
    }
  }

  static async updateToDo(id, title, text, isCompleted) {
    try {
      if (title.trim() == "" || title == null) {
        throw new Error("Title must not null");
      }
      let preData = await ToDoModel.findById(id);
      preData.title = title;
      preData.text = text;
      preData.isCompleted = isCompleted;

      await preData.save();
    } catch (error) {
      console.error(`Error occour, ${error}`);
      throw new Error(error);
    }
  }
  static async deleteTodo(id) {
    try {
      await ToDoModel.findByIdAndDelete(id);
    } catch (error) {
      console.error(`Error occour, ${error}`);
      throw new Error(error);
    }
  }
};
