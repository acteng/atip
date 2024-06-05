import { writable, type Writable } from "svelte/store";

export function showHideLayer(name: string): Writable<boolean> {
  let initialValue = new URLSearchParams(window.location.search).has(name);
  let store = writable(initialValue);
  // TODO How do we avoid leaking this?
  store.subscribe((show) => {
    let url = new URL(window.location.href);
    if (show) {
      url.searchParams.set(name, "1");
    } else {
      url.searchParams.delete(name);
    }
    window.history.replaceState(null, "", url.toString());
  });
  return store;
}
