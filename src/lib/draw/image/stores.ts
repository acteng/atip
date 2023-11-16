import { writable, type Writable } from "svelte/store";

// Use this to share between two components, nested under the sidebar and map

export const imgSrc: Writable<string | null> = writable(null);
export const opacity: Writable<number> = writable(100);
