// This script generates random sample data for input to the scheme browse page.
// Note the random seed can't be set; this is non-deterministic.

import * as fs from "fs";
import turfBbox from "@turf/bbox";
import booleanContains from "@turf/boolean-contains";
import { lineString, point, polygon } from "@turf/helpers";
import length from "@turf/length";
import { randomPoint } from "@turf/random";
import type { Feature, LineString, Polygon, Position } from "geojson";

main();

function main() {
  let schemes: { [reference: string]: any } = {};
  let gj = {
    type: "FeatureCollection",
    features: [],
    schemes,
  };

  let authorities = JSON.parse(
    fs.readFileSync("assets/authorities.geojson", { encoding: "utf8" }),
  );
  // Hack around MultiPolygon boundaries
  for (let f of authorities.features) {
    if (f.geometry.type == "MultiPolygon") {
      f.geometry = {
        type: "Polygon",
        coordinates: f.geometry.coordinates[0],
      };
    }
  }

  let count = 0;
  for (let authority of authorities.features) {
    let scheme_reference = `ATE${count}`;
    count++;
    gj.schemes[scheme_reference] = {
      scheme_reference,
      scheme_name: scheme_reference,
      browse: {
        authority_or_region: `${authority.properties.level}_${authority.properties.name}`,
        capital_scheme_id: count.toString(),
        funding_programme: pickRandom(["ATF2", "ATF3", "ATF4"]),
      },
    };

    // Make a few interventions for every authority

    let pt = point(makePoints(authority.geometry, 1)[0]);
    pt.properties!.scheme_reference = scheme_reference;
    if (Math.random() < 0.5) {
      pt.properties!.intervention_type = "crossing";
      pt.properties!.name = pickRandom([
        "New crossing",
        "Upgrade existing crossing",
      ]);
      pt.properties!.description = pickRandom([
        "Zebra",
        "Toucan",
        "Signalized",
      ]);
    } else {
      pt.properties!.intervention_type = "other";
      pt.properties!.name = pickRandom([
        "Street lighting",
        "Improve drainage",
        "Repair damaged surface",
      ]);
    }
    // @ts-expect-error ts being overzealous, it's okay to have properties in our features
    gj.features.push(pt);

    let route = makeLineString(authority.geometry);
    route.properties!.scheme_reference = scheme_reference;
    route.properties!.intervention_type = "route";
    route.properties!.length_meters =
      length(route, { units: "kilometers" }) * 1000.0;
    route.properties!.name = pickRandom(["School street", "Route from X to Y"]);
    route.properties!.description = pickRandom([
      "Bidirectional segregated",
      "Shared use with segregation",
      "Stepped cycle-track on the north side only",
    ]);
    // @ts-expect-error ts being overzealous, it's okay to have properties in our features
    gj.features.push(route);

    let area = makePolygon(authority.geometry);
    area.properties!.scheme_reference = scheme_reference;
    area.properties!.intervention_type = "area";
    area.properties!.name = pickRandom([
      "Area-wide traffic management",
      "Lighting improvements",
      "New cycle hangars",
    ]);
    // @ts-expect-error ts being overzealous, it's okay to have properties in our features
    gj.features.push(area);
  }

  fs.writeFileSync("random_schemes.geojson", JSON.stringify(gj));
}

function makePoints(boundary: Feature<Polygon>, count: number): Position[] {
  let points = [];
  let bbox = turfBbox(boundary);
  while (points.length < count) {
    let pt = randomPoint(1, { bbox }).features[0];
    if (booleanContains(boundary, pt)) {
      points.push(pt.geometry.coordinates);
    }
  }
  return points;
}

function makeLineString(boundary: Feature<Polygon>): Feature<LineString> {
  // turf's randomLineString picks really tiny lengths
  let points = makePoints(boundary, 2);
  return lineString([points[0], points[1]]);
}

function makePolygon(boundary: Feature<Polygon>): Feature<Polygon> {
  // turf's randomPolygon produces tiny areas
  let points = makePoints(boundary, 3);
  return polygon([[points[0], points[1], points[2], points[0]]]);
}

function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
