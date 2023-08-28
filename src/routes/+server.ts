import { addTodo, removeTodo } from "$lib/server/database";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";


export const POST: RequestHandler = async (event) => {
    const formData = await event.request.formData();
    const todo = String(formData.get("todo"));

    const data: Data = {
    success: false,
    errors: {}
    }

    if(!todo){
        data.errors.todo = "required";
        return json(data, {status: 400});
    }

    addTodo(todo);
    data.success = true;

    return json(data);
}

export const DELETE: RequestHandler =async (event) => {
    const formData = await event.request.formData();
    const todoId = Number(formData.get("id"));

    removeTodo(todoId);

    return json({success: true});
}