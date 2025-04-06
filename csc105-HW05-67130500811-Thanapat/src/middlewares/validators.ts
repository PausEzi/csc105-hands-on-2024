import type { Context, Next } from 'hono';
import type { CreateTodoInput, UpdateTodoInput } from '../types/index.ts';

export async function validateIdParam(c: Context, next: Next) {
    const id = c.req.param('id');
    const parsedId = parseInt(id);

    if (isNaN(parsedId) || parsedId <= 0) {
        return c.json({ error: 'ID must be a positive integer' }, 400);
    }

    // Store the validated ID for the next handler
    c.set('id', parsedId);
    await next();
}

export async function validateCreateTodo(c: Context, next: Next) {
    try {
        const body = await c.req.json();

        if (!body.title || typeof body.title !== 'string') {
            return c.json({ error: 'Title is required and must be a string' }, 400);
        }

        if (body.completed !== undefined && typeof body.completed !== 'boolean') {
            return c.json({ error: 'Completed must be a boolean' }, 400);
        }

        // Store validated data for the next handler
        c.set('todoData', {
            title: body.title,
            completed: body.completed || false
        } as CreateTodoInput);

        await next();
    } catch (error) {
        return c.json({ error: 'Invalid JSON in request body' }, 400);
    }
}

export async function validateUpdateTodo(c: Context, next: Next) {
    try {
        const body = await c.req.json();

        // For PUT, all fields are required
        if (!body.title || typeof body.title !== 'string') {
            return c.json({ error: 'Title is required and must be a string' }, 400);
        }

        if (typeof body.completed !== 'boolean') {
            return c.json({ error: 'Completed is required and must be a boolean' }, 400);
        }

        // Store validated data for the next handler
        c.set('todoData', {
            id: parseInt(c.req.param('id')),
            title: body.title,
            completed: body.completed
        });

        await next();
    } catch (error) {
        return c.json({ error: 'Invalid JSON in request body' }, 400);
    }
}

export async function validatePatchTodo(c: Context, next: Next) {
    try {
        const body = await c.req.json();

        // For PATCH, fields are optional but must be valid if present
        if (body.title !== undefined && typeof body.title !== 'string') {
            return c.json({ error: 'Title must be a string' }, 400);
        }

        if (body.completed !== undefined && typeof body.completed !== 'boolean') {
            return c.json({ error: 'Completed must be a boolean' }, 400);
        }

        // Store validated data for the next handler
        c.set('todoData', {
            title: body.title,
            completed: body.completed
        } as UpdateTodoInput);

        await next();
    } catch (error) {
        return c.json({ error: 'Invalid JSON in request body' }, 400);
    }
}