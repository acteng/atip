import type { FeatureCollection } from "geojson";
import authoritiesUrl from "../../../assets/authorities.geojson?url";

export async function getAuthoritiesData(): Promise<FeatureCollection> {
  const resp = await fetch(authoritiesUrl);
  const body = await resp.text();
  return JSON.parse(body);
}
