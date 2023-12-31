import { writable, type Writable } from "svelte/store";

export const interactiveMapLayersEnabled: Writable<boolean> = writable(true);
export const filterText: Writable<string> = writable("");
