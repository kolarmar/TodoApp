import { f as fail } from "../../chunks/index.js";
import Prisma from "@prisma/client";
const PrismaClient = Prisma.PrismaClient;
const prisma = new PrismaClient();
const load = async () => {
  const todos = await prisma.todo.findMany();
  return { todos };
};
const actions = {
  addTodo: async (event) => {
    const formData = await event.request.formData();
    const todoText = String(formData.get("todo"));
    if (!todoText) {
      return fail(400, { todoText, missing: true });
    }
    await prisma.todo.create({
      data: {
        text: todoText,
        completed: false
      }
    });
    return { success: true, stateInfo: "Added a todo" };
  },
  completeTodo: async (event) => {
    const formData = await event.request.formData();
    const todoId = String(formData.get("id"));
    await prisma.todo.update({
      where: {
        id: todoId
      },
      data: {
        completed: true
      }
    });
    return { success: true, stateInfo: "Completed a todo" };
  },
  removeTodo: async (event) => {
    const formData = await event.request.formData();
    const todoId = String(formData.get("id"));
    await prisma.todo.delete({
      where: {
        id: todoId
      }
    });
    return { success: true, stateInfo: "Removed a todo" };
  },
  completeAllTodos: async () => {
    await prisma.todo.updateMany({
      data: {
        completed: true
      }
    });
    return { success: true, stateInfo: "Completed all todos" };
  },
  clearTodos: async () => {
    await prisma.todo.deleteMany();
    return { success: true, stateInfo: "Cleared all todos" };
  }
};
export {
  actions,
  load
};
