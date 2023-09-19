import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.fedc94b4.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.92575915.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.7c090ab0.js"];
export const stylesheets = ["_app/immutable/assets/2.bc53dd46.css"];
export const fonts = [];
