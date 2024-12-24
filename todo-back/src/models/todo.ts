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

// import mongoose, { Schema, Document } from "mongoose";

// interface ITodo extends Document {
//   _id: string;
//   title: string;
//   status: boolean;
// }

// const todoSchema: Schema = new Schema(
//   {
//     _id: { type: String, required: true },
//     title: { type: String, required: true },
//     status: { type: Boolean, default: false },
//   },
//   { timestamps: true }
// );

// const Todo = mongoose.model<ITodo>("Todo", todoSchema);

// export default Todo;
