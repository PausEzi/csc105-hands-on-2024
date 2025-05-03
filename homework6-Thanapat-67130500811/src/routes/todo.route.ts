import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.delete("/", todoController.deleteTodo);
todoRouter.get("/getTodo", todoController.getTodosByUser)
todoRouter.patch("/", todoController.updateTodoComplete)
todoRouter.patch("/patchTodo",todoController.updateTodoTitle)

export { todoRouter };