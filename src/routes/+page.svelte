<script lang="ts">
    import { invalidateAll } from "$app/navigation";
    
    import type { PageData } from "./$types";

    export let data: PageData;

    let form: Data;

    async function addTodo(event: Event) {
        const formEl = event.target as HTMLFormElement;
        const data = new FormData(formEl);

        const response = await fetch(formEl.action, {
            method: "POST",
            body: data
        })

        const responseData = await response.json();

        form = responseData;

        formEl.reset();

        await invalidateAll();
    }

    async function completeTodo(event: Event) {
        const fromEl = event.target as HTMLFormElement;
        const data = new FormData(fromEl);

        const response = await fetch(fromEl.action, {
            method: "PATCH",
            body: data
        });

        await invalidateAll();
    }

    async function removeTodo(event:Event) {
        const formEl = event.target as HTMLFormElement;
        const data = new FormData(formEl);

        const response = await fetch(formEl.action, {
            method: "DELETE",
            body: data
        });

        await invalidateAll();
    }

</script>

<div>

    <form on:submit|preventDefault={addTodo} method="POST">
        <input type="text" name="todo" placeholder="+ Add a todo">
        {#if form?.success}
            <p class="success">Added a todo! 🫡</p>
        {/if}
        {#if form?.errors?.todo}
            <p class="error">This field is required!</p>
        {/if}
    </form>

    <ul>
        {#each data.todos as todo}
            <li>
                <span class:crossed={todo.completed}>{todo.text}</span>
                <div class="buttons">
                    <form on:submit|preventDefault={completeTodo} method="POST">
                        <input type="hidden" name="id" value={todo.id}>
                        <button class="check" type="submit">✅</button>
                    </form>
                    <form on:submit|preventDefault={removeTodo} method="POST">
                        <input type="hidden" name="id" value={todo.id}>
                        <button class="delete" type="submit">❌</button>
                    </form>
                </div>
            </li>
        {/each}
    </ul>

</div>

<style>

    :global(body) {
        padding-left: 10rem;
        padding-right: 10rem;
    }

    ul {
        padding: 0;
    }

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        text-transform: capitalize;
    }

    .buttons {
        display: flex;
        margin-top: 1.5rem;
    }

    .check {
        margin: 0;
        background: none;
        border: none;
    }

    .delete {
        margin: 0;
        background: none;
        border: none;
    }

    .crossed {
        text-decoration: line-through;
        opacity: 40%;
    }

    .success {
        color: green;
    }

    .error {
        color: red;
    }
</style>
