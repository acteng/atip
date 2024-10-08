import { writable, type Writable } from "svelte/store";

export let layerLegends: Writable<Map<string, HTMLDivElement>> = writable(
  new Map(),
);
export let activeLayers: Writable<Set<string>> = writable(new Set());
