import type { PageServerLoad } from "./$types";
import { addTodo, clearTodos, completeTodo, getTodos, removeTodo } from "$lib/server/database"
import { fail, type Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
    const todos = getTodos();
    return { todos };
}

export const actions: Actions = {
    addTodo: async (event) => {
        const formData = await event.request.formData();
        const todoText = String(formData.get("todo"))

        if(!todoText){
            return fail(400, {todoText, missing: true});
        }

        addTodo(todoText);

        return {success: true};
    },

    completeTodo: async (event) => {
        const formData = await event.request.formData();
        const todoId = Number(formData.get("id"));

        completeTodo(todoId);

        return {success: true};
    },

    removeTodo: async (event) => {
        const formData = await event.request.formData();
        const todoId = Number(formData.get("id"));

        removeTodo(todoId);

        return {success: true};
    },

    clearTodos: () => {
        clearTodos();
    }
}