import { writable, type Writable } from "svelte/store";

export const interactiveMapLayersEnabled: Writable<boolean> = writable(true);
export let controls: Writable<HTMLDivElement | null> = writable(null);
