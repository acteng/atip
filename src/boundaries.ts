import area from "@turf/area";
import booleanContains from "@turf/boolean-contains";
import type {
  Feature,
  FeatureCollection,
  MultiPolygon,
  Polygon,
} from "geojson";

// The type for assets/authorities.geojson
export type AuthorityBoundaries = {
  type: "FeatureCollection";
  // Sorted by area ascending
  features: Array<
    AuthorityBoundaryFeature<Polygon> | AuthorityBoundaryFeature<MultiPolygon>
  >;
};

interface AuthorityBoundaryFeature<G extends Polygon | MultiPolygon> {
  type: "Feature";
  geometry: G;
  properties: {
    level: "TA" | "LAD";
    name: string;
    // Derived from the above
    full_name: string;
  };
}

// After loading assets/authorities.geojson, use this to establish the
// invariants of AuthorityBoundaries.
export function fixBoundaries(gj: FeatureCollection): AuthorityBoundaries {
  for (let f of gj.features) {
    f.properties!.full_name = `${f.properties!.level}_${f.properties!.name}`;
  }
  // Sort so that findSmallestAuthority works. Note this only takes about 2ms.
  gj.features.sort((a, b) => area(a) - area(b));
  return gj as AuthorityBoundaries;
}

// Find the name of the smallest authority boundary completely containing the scheme.
export function findSmallestAuthority(
  features: Feature[],
  authorities: AuthorityBoundaries,
): string | null {
  let f = authorities.features.find((authority) =>
    allFeaturesContainedByPolygon(features, authority),
  );
  if (f) {
    return f.properties!.full_name;
  }
  return null;
}

function allFeaturesContainedByPolygon(
  features: Feature[],
  boundary: Feature<Polygon | MultiPolygon>,
): boolean {
  // Turf can't handle MultiPolygons. Except for the Isles of Scilly, it's OK
  // to just use the first Polygon and ignore the islands part of Devon
  // and Torridge.
  let boundaryPolygon = boundary.geometry;
  if (boundaryPolygon.type == "MultiPolygon") {
    boundaryPolygon = {
      type: "Polygon",
      coordinates: boundaryPolygon.coordinates[0],
    };
  }

  for (let f of features) {
    // Turf can't handle MultiLineString. Check each individual LineString.
    if (f.geometry.type == "MultiLineString") {
      for (let points of f.geometry.coordinates) {
        let lineString = {
          type: "LineString" as const,
          coordinates: points,
        };
        if (!booleanContains(boundaryPolygon, lineString)) {
          return false;
        }
      }
    } else {
      if (!booleanContains(boundaryPolygon, f)) {
        return false;
      }
    }
  }
  return true;
}
