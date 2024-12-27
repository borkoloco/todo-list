import mongoose, { Schema, Document } from "mongoose";

interface ITodo extends Document {
  title: string;
  status: boolean;
}

const todoSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Todo = mongoose.model<ITodo>("Todo", todoSchema);

export default Todo;
