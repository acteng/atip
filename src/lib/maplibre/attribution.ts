import { writable, type Writable, get } from "svelte/store";
import type { Map } from "maplibre-gl";

export const attribution = writable("");
export const googleKeys: Writable<[string, string] | null> = writable(null);

export async function getGoogleAttribution(map: Map): Promise<string> {
  let keys = get(googleKeys);
  if (!map || !keys) {
    return "Google (attributions loading)";
  }
  let [apiKey, sessionKey] = keys;

  let bounds = map.getBounds();
  let url = `https://tile.googleapis.com/tile/v1/viewport?session=${sessionKey}&key=${apiKey}&zoom=${Math.floor(map.getZoom())}&north=${bounds.getNorth()}&south=${bounds.getSouth()}&east=${bounds.getEast()}&west=${bounds.getWest()}`;
  let resp = await fetch(url);
  let json = await resp.json();
  return json.copyright;
}
