import type { FeatureCollection } from "geojson";
import authoritiesUrl from "../../../assets/authorities.geojson?url";

export async function getAuthoritiesData() {
  const resp = await fetch(authoritiesUrl);
  const body = await resp.text();
  const json: FeatureCollection = JSON.parse(body);
  return Promise.resolve(json);
}

export async function getAuthoritiesNameSet() {
  const json: FeatureCollection = await getAuthoritiesData();
  const authoritySet: Set<string> = new Set();
  for (let feature of json.features) {
    authoritySet.add(feature.properties!.name);
  }
  return Promise.resolve(authoritySet);
}
