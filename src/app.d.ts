// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	
	type Data = {
		success: boolean;
		errors: Record<string,string>;
	}
}

export {};
