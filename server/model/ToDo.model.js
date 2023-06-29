import mongoose from "mongoose";
// import Inc from "mongoose-sequence";

// const AutoIncrement = Inc(mongoose);

const toDoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: false,
    },
   
    isCompleted: {
      type: Boolean,
      default: false,
    },

  },
  {
    timestamps: true,
  }
);

// toDoSchema.plugin(AutoIncrement);

export const ToDoModel = mongoose.model("ToDo", toDoSchema);
