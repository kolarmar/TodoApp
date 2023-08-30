import type { PageServerLoad } from "./$types";
import { addTodo, clearTodos, completeAllTodos, completeTodo, getTodos, removeTodo } from "$lib/server/database"
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

        return {success: true, stateInfo: "Added a todo"};
    },

    completeTodo: async (event) => {
        const formData = await event.request.formData();
        const todoId = Number(formData.get("id"));

        completeTodo(todoId);

        return {success: true, stateInfo: "Completed a todo"};
    },

    removeTodo: async (event) => {
        const formData = await event.request.formData();
        const todoId = Number(formData.get("id"));

        removeTodo(todoId);

        return {success: true, stateInfo: "Removed a todo"};
    },

    completeAllTodos: () => {

        completeAllTodos();

        return {success: true, stateInfo: "Completed all todos"};
    },

    clearTodos: () => {

        clearTodos();

        return {success: true, stateInfo: "Cleared all todos"};
    }
}