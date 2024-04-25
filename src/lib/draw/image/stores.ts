import { writable, type Writable } from "svelte/store";

// Use this to share between two components, nested under the sidebar and map

export const imgSrc: Writable<string | null> = writable(null);
export const opacity: Writable<number> = writable(100);

export const percentX1: Writable<number> = writable(0);
export const percentY1: Writable<number> = writable(0);
export const percentX2: Writable<number> = writable(1);
export const percentY2: Writable<number> = writable(1);
