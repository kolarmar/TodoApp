import { c as create_ssr_component } from "../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-s01ef0{text-align:center;margin:0;margin-top:1rem;margin-bottom:1rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content"><h1 class="svelte-s01ef0" data-svelte-h="svelte-1mb8gdx">Todos</h1> <main>${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
