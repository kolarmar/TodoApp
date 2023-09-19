export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Icon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4fde38b5.js","app":"_app/immutable/entry/app.2d7f7cd0.js","imports":["_app/immutable/entry/start.4fde38b5.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/singletons.7c090ab0.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.2d7f7cd0.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.92575915.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
