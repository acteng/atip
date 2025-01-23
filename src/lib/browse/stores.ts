import { writable, type Writable } from "svelte/store";

export const interactiveMapLayersEnabled: Writable<boolean> = writable(true);
export let controls: Writable<HTMLDivElement | null> = writable(null);

// After modifying URL query parameters, this will both change the URL in
// browser history and remember it as the last browse page setting.
export function changeUrlQueryParams(url: URL) {
  window.history.replaceState(null, "", url.toString());

  window.localStorage.setItem(
    "browsepage-querystring",
    url.searchParams.toString(),
  );
}
