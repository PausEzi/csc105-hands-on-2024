import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";
import {json} from "node:stream/consumers";

type createTodoBody = {
    title: string;
    userId: number;
};
type UpdateTodoBody = {
    id: string;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const deleteTodo = async (c: Context) => {
    try {
        const query = c.req.query("id");
        if (query !== undefined && query !== null) {
            const data = await todoModel.deleteTodo(parseInt(query));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const getTodosByUser = async (c: Context) => {
    try {
        const param = c.req.query("userId");
        if (!param) {
            return c.json(
                { success: false, data: null, msg: "Missing userId parameter" },
                400
            );
        }

        const userId = parseInt(param);
        const todos = await todoModel.getTodosByUser(userId);

        return c.json({ success: true, data: todos }, 200);
    } catch (e) {
        return c.json({ success: false, data: null, msg: `${e}` }, 500);
    }
}
const updateTodoComplete = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.updateTodoComplete(parseInt(param));
            return c.json({
                success: true,
                data: data,
                msg: "The Completed status has been updated"
            });
        }
        return c.json({
            success: false,
            msg: "The Completed status has not been updated",
        });
    } catch (e) {
        return c.json({
            success: false,
            data: null,
            msg: `${e}`,
        },);
    }
}
const updateTodoTitle = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (!param) {
            return c.json({
                success: false,
                msg: "Missing id",
            },400);
        }
        const updateTodo = await todoModel.updateTodoTitle(parseInt(param));
        return c.json({
            success: true,
            data: updateTodo,
            msg: "The Title has been updated"
        });
    }catch (e){
        return c.json({
            success: false,
            data: null,
            msg: `${e}`,
        },500);
    }
}

export { createTodo , getTodo , deleteTodo, getTodosByUser, updateTodoComplete,updateTodoTitle};