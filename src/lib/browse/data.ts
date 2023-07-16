import type { FeatureCollection } from "geojson";

// This must be filled out in the input file
interface SchemeData {
  scheme_reference: string;
  num_features: number;
  authority_or_region: string;
  capital_scheme_id: string;
  funding_programme: string;
}

export interface Scheme extends SchemeData {
  num_features: number;
}

// Takes a GeoJSON file representing a bunch of scheme files combined into one.
// Cleans up some problems with this input (temporary, until fixed upstream) and
// returns a dictionary of Schemes, keyed (and ordered) by scheme_reference.
// Each feature (intervention) in the GJ links back to one of these schemes by
// scheme_reference.
export function processInput(
  gj: FeatureCollection & { schemes: { [name: string]: SchemeData } }
): Map<string, Scheme> {
  let schemes = new Map();

  // Assume the input has a top-level dictionary keyed by scheme_reference
  for (let [scheme_reference, scheme] of Object.entries(gj.schemes)) {
    schemes.set(scheme_reference, {
      scheme_reference,
      num_features: 0,
      authority_or_region: scheme.authority_or_region,
      capital_scheme_id: scheme.capital_scheme_id,
      funding_programme: scheme.funding_programme,
    });
  }

  for (let feature of gj.features) {
    schemes.get(feature.properties.scheme_reference).num_features++;
    // Remove extraneous fields from the input. Aside from the v1
    // InterventionProps, there should just be a scheme_reference linking to
    // the top-level dictionary.
    delete feature.properties.id;
    delete feature.properties.authority_or_region;
    delete feature.properties.capital_scheme_id;
    delete feature.properties.funding_programme;
    delete feature.properties.valid;
    delete feature.properties.centroid_lon;
    delete feature.properties.centroid_lat;
  }

  return schemes;
}
