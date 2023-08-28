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

<div class="content">

    <form on:submit|preventDefault={addTodo} method="POST">
        <input type="text" name="todo" placeholder="+ Add a todo">
    </form>

    <ul>
        {#each data.todos as todo}
        <li>
            <span>{todo.text}</span>
            <form on:submit|preventDefault={removeTodo} method="POST">
                <input type="hidden" name="id" value={todo.id}>
                <button class="delete" type="submit">❌</button>
            </form>
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

    .delete {
        margin: 0;
        background: none;
        border: none;
    }
</style>
