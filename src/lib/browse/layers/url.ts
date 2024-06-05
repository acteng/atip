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

export function customUrl<T>(
  name: string,
  defaultValue: T,
  stringify: (x: T) => string | null,
  parse: (x: string) => T,
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
