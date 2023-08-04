import type { FeatureCollection, Polygon } from "geojson";
import stationsUrl from "../../../assets/railway_stations.geojson?url";

export async function getRailwayStationsGeoJson(): Promise<
  FeatureCollection<Polygon>
> {
  const resp = await fetch(stationsUrl);
  return await resp.json();
}
