import { db } from "../index.ts";

const createTodo = async (  title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
         where: {
            id: id,
        },
        include: {
            user: true,
        },
    });
    return todo;
}
const deleteTodo = async (id: number) => {
    const todo = await db.todo.delete({
        where: {
            id: id,
        },
    });
    return todo;
}
const getTodosByUser = async (userId: number) => {
    return db.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            id: true,
            title: true,
            userId: true,
        },
    });
}
const updateTodoComplete = async (id: number) => {
    try{
        const todo = await db.todo.update({
            where: {
                id: id,
            },
            data: {
                completed: true,
            },
        });
        return todo;
    }catch (e){
        console.error("Todo not found");
        return null;
    }
}
const updateTodoTitle = async(id:number)=>{
    try{
        const todo =  await db.todo.update({
            where: {
                id: id,
            },
            data: {
                title: "HaLo",
            },
        })
        return todo;
    }catch (e){
        console.error("Todo not found");
        return null;
    }
}

export { createTodo , getTodo , deleteTodo,getTodosByUser, updateTodoComplete, updateTodoTitle};