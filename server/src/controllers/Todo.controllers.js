import { Todo } from "../models/Todo.model.js";
import ApiError from "../utils/ApiError.util.js";
import ApiResponse from "../utils/ApiResponse.util.js";

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (!todos) {
      return res.status(500).json(new ApiError(500, "unable to fetch todos"));
    }
    return res
      .status(200)
      .json(new ApiResponse(200, "todos fetched successfully", todos));
  } catch (error) {
    return res
      .status(error?.status)
      .json(new ApiError(error?.status, error?.message));
  }
};

const getOneTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    if (!todoId) {
      return res.status(400).json(new ApiError(400, "todo id is required"));
    }
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(500).json(new ApiError(500, "unable to fetch todo"));
    }
    return res
      .status(200)
      .json(new ApiResponse(200, "todos fetched successfully", todo));
  } catch (error) {
    return res
      .status(error?.status)
      .json(new ApiError(error?.status, error?.message));
  }
};

const createTodo = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res
        .status(400)
        .json(new ApiError(400, "todo content is required"));
    }
    const todo = await Todo.create({ text });
    if (!todo) {
      return res.status(500).json(new ApiError(500, "unable to create todo"));
    }
    return res
      .status(200)
      .json(new ApiResponse(200, "todo created succesfully", todo));
  } catch (error) {
    return res
      .status(error?.status)
      .json(new ApiError(error?.status, error?.message));
  }
};

const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const { text } = req.body;
    if (!todoId || !text) {
      return res
        .status(400)
        .json(new ApiError(400, "todo id and context are required"));
    }
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res
        .status(500)
        .json(new ApiError(500, "todo with this id doesn't exists"));
    }
    todo.text = text;
    await todo.save();
    return res
      .status(200)
      .json(new ApiResponse(200, "todo updated sucessfully"));
  } catch (error) {
    return res
      .status(error?.status)
      .json(new ApiError(error?.status, error?.message));
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    if (!todoId) {
      return res.status(400).json(new ApiError(400, "todo id is required"));
    }
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res
        .status(500)
        .json(new ApiError(500, "todo with this id doesn't exists"));
    }
    const isDeleted = await Todo.deleteOne({ _id: todoId });
    if (!isDeleted) {
      return res.status(500).json(new ApiError(500, "unable to delete todo"));
    }
    return res
      .status(200)
      .json(new ApiResponse(200, "todo deleted sucesfully", isDeleted));
  } catch (error) {
    return res
      .status(error?.status)
      .json(new ApiError(error?.status, error?.message));
  }
};

export { getAllTodos, getOneTodo, createTodo, updateTodo, deleteTodo };
