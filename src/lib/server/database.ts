type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

let todos: Todo[] = [];


export function getTodos() {
    return todos;
}

export function addTodo(text: string) {
    const todo: Todo = {
        id: Date.now(),
        text: text,
        completed: false
    }
    todos.push(todo);
}

export function removeTodo(id: number) {
    todos = todos.filter((todo) => todo.id !== id)
}

export function clearTodos() {
    todos = [];
}