import { writable, type Writable } from "svelte/store";

// Create a store to represent whether a layer should be shown or hidden. The
// state is synced as a URL query parameter.
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

// Create a store to represent some state about a layer, syncing it to a URL
// query parameter. The parameter missing is equivalent to stringify returning
// null.
export function customUrlState<T>(
  name: string,
  defaultValue: T,
  stringify: (state: T) => string | null,
  parse: (param: string) => T,
): Writable<T> {
  let param = new URLSearchParams(window.location.search).get(name);
  let initialValue = param == null ? defaultValue : parse(param);
  let store = writable(initialValue);
  // TODO How do we avoid leaking this?
  store.subscribe((state) => {
    let url = new URL(window.location.href);
    let value = stringify(state);
    if (value == null) {
      url.searchParams.delete(name);
    } else {
      url.searchParams.set(name, value);
    }
    window.history.replaceState(null, "", url.toString());
  });
  return store;
}
