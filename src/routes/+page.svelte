<script lang="ts">
    import { enhance } from "$app/forms";
    import type { ActionData, PageData } from "./$types";

    export let data: PageData;
    export let form: ActionData;

</script>

<div>

    <div class="secondaryButtonsPanel">
        <form method="POST" action="?/completeAllTodos" use:enhance>
            <button class="secondaryButton" type="submit">Complete All</button>
        </form>
        <form method="POST" action="?/clearTodos" use:enhance>
            <button class="secondaryButton" type="submit">Clear All</button>
        </form>
    </div>

    <form method="POST" action="?/addTodo" use:enhance>
        <input type="text" name="todo" placeholder="+ Add a todo">

        {#if form?.success}
            <p class="success">{form.stateInfo}! 🫡</p>
        {/if}
        {#if form?.missing}
            <p class="error">This field is required!</p>
        {/if}
    </form>
    
    <ul>
        {#each data.todos as todo}
            <li>
                <span class:crossed={todo.completed}>{todo.text}</span>
                <div class="buttons">
                    <form method="POST" action="?/completeTodo" use:enhance>
                        <input type="hidden" name="id" value={todo.id}>
                        <button class="check" type="submit">✅</button>
                    </form>
                    <form method="POST" action="?/removeTodo" use:enhance>
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

    .secondaryButtonsPanel {
        margin: 0;
        display: flex;
        justify-content: flex-end;
        opacity: 40%;
        height: 2.5rem;
    }

    .secondaryButton {
        margin: 0;
        background: none;
        border: none;
        padding: .5rem;
        color: darkturquoise;
    }
</style>
