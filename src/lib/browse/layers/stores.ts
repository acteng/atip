import { writable, type Writable } from "svelte/store";

// Per layer, the legend (and controls) shown on the right
export let layerLegends: Writable<Map<string, HTMLDivElement>> = writable(
  new Map(),
);
// The set of layers actively selected
export let activeLayers: Writable<Set<string>> = writable(new Set());
