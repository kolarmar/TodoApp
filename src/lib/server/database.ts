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

export function completeTodo(id: number) {
    const todo = todos.find((todo) => todo.id === id);

    if(!todo){
        return;
    }

    if(todo.completed === false) todo.completed = true;
    else todo.completed = false;
}

export function removeTodo(id: number) {
    todos = todos.filter((todo) => todo.id !== id);
}

export function clearTodos() {
    todos = [];
}