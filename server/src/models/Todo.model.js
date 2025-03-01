import { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    text: {
      type: String,
      min: 5,
      max: 200,
      required: true,
    },
  },
  { timestamps: true }
);

export const Todo = model("Todo", todoSchema);
