import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../chunks/ssr.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{padding-left:10rem;padding-right:10rem}ul.svelte-1dir18n{padding:0}li.svelte-1dir18n{display:flex;justify-content:space-between;align-items:center;height:4rem}span.svelte-1dir18n{text-transform:capitalize}.buttons.svelte-1dir18n{display:flex;margin-top:1.5rem}.check.svelte-1dir18n{margin:0;background:none;border:none}.delete.svelte-1dir18n{margin:0;background:none;border:none}.crossed.svelte-1dir18n{text-decoration:line-through;opacity:40%}.success.svelte-1dir18n{color:green}.error.svelte-1dir18n{color:red}.secondaryButtonsPanel.svelte-1dir18n{margin:0;display:flex;justify-content:flex-end;opacity:40%;height:2.5rem}.secondaryButton.svelte-1dir18n{margin:0;background:none;border:none;padding:.5rem;color:darkturquoise}.actionInfo.svelte-1dir18n{display:flex;justify-content:space-between;align-items:center;height:1.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div><div class="secondaryButtonsPanel svelte-1dir18n"><form method="POST" action="?/completeAllTodos" data-svelte-h="svelte-1oaxfb9"><button class="secondaryButton svelte-1dir18n" type="submit">Complete All</button></form> <form method="POST" action="?/clearTodos" data-svelte-h="svelte-17all6w"><button class="secondaryButton svelte-1dir18n" type="submit">Clear All</button></form></div> <form method="POST" action="?/addTodo"><input type="text" name="todo" placeholder="+ Add a todo"> <div class="actionInfo svelte-1dir18n">${form?.success ? `<p class="success svelte-1dir18n">${escape(form.stateInfo)}! 🫡</p>` : ``} ${form?.missing ? `<p class="error svelte-1dir18n" data-svelte-h="svelte-1a8ov9r">This field is required!</p>` : ``} ${``}</div></form> <ul class="svelte-1dir18n">${each(data.todos, (todo) => {
    return `<li class="svelte-1dir18n"><span class="${["svelte-1dir18n", todo.completed ? "crossed" : ""].join(" ").trim()}">${escape(todo.text)}</span> <div class="buttons svelte-1dir18n"><form method="POST" action="?/completeTodo"><input type="hidden" name="id"${add_attribute("value", todo.id, 0)}> <button class="check svelte-1dir18n" type="submit" data-svelte-h="svelte-jd8i0x">✅</button></form> <form method="POST" action="?/removeTodo"><input type="hidden" name="id"${add_attribute("value", todo.id, 0)}> <button class="delete svelte-1dir18n" type="submit" data-svelte-h="svelte-1wjc2xr">❌</button> </form></div> </li>`;
  })}</ul> </div>`;
});
export {
  Page as default
};
