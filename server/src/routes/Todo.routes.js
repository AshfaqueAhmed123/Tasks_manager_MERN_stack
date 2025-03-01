import { Router } from "express";
import {
  getAllTodos,
  getOneTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/Todo.controllers.js";

const router = Router();

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getOneTodo).patch(updateTodo).delete(deleteTodo);

export default router;
