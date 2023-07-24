import type { FeatureCollection, Polygon } from "geojson";
import authoritiesUrl from "../../../assets/authorities.geojson?url";

export async function getAuthoritiesGeoJson(): Promise<
  FeatureCollection<Polygon>
> {
  const resp = await fetch(authoritiesUrl);
  return await resp.json();
}
