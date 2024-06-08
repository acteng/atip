import type { FeatureUnion, SchemeCollection, SchemeData } from "types";

// Takes a GeoJSON file representing a bunch of scheme files combined into one.
// Modifies this GeoJSON in-place, and returns a dictionary of Schemes, keyed
// (and ordered) by scheme_reference. Each feature (intervention) in the GJ
// links back to one of these schemes by scheme_reference.
export function processInput(gj: SchemeCollection): Map<string, SchemeData> {
  let schemes = new Map();

  // Assume the input has a top-level dictionary keyed by scheme_reference
  for (let [scheme_reference, scheme] of Object.entries(gj.schemes)) {
    schemes.set(scheme_reference, scheme);
  }

  gj.features = gj.features.filter((f) => keepFeature(f));

  let id = 1;
  for (let feature of gj.features) {
    let scheme: SchemeData = schemes.get(feature.properties!.scheme_reference);
    if (scheme.browse) {
      // TODO For easy styling, copy one field from scheme to all its features.
      // As we have more cases like this, revisit what's most performant.
      // @ts-ignore Extend InterventionProps with scheme_reference, current_milestone, and this
      feature.properties!.funding_programme = scheme.browse.funding_programme;
      // @ts-ignore Same
      feature.properties!.current_milestone = scheme.browse.current_milestone;
      // Force numeric IDs (skipping 0) for hovering to work
      feature.id = id++;
    }
  }

  return schemes;
}

// These should ideally be fixed during upstream data validation processes.
function keepFeature(feature: FeatureUnion): boolean {
  // Manually filter out some large areas that describe a boundary or
  // non-specific location of interventions. They make it harder to
  // interact with smaller, more specific interventions.
  let hugeAreas = [
    "eb0ad8ed183c137da4bae66afa944da9",
    "0a568f07241be96f0a70aa73a0de80c8",
    "6c4a5d57176eaeb3296eba790f869909",
    "475e9a43749ce09c7edaaffa0ae57a2f",
    "117b783cb2916a1bb4262960e523acc5",
    "7a600e6342b226aa0983c8dfed19254f",
    "84cc5eb1b52a4e49188058373e587ff0",
  ];

  // @ts-ignore The id field is present in the current input data, but it's not
  // part of our intended schema or used elsewhere, so InterventionProps
  // deliberately does not include it. Only use it here.
  if (hugeAreas.includes(feature.properties.id)) {
    return false;
  }

  return true;
}

export const fundingProgrammesForColouringAndFiltering: string[] = [
  "ATF2",
  "ATF2 or ATF3",
  "ATF3",
  "ATF4",
  "ATF4E",
  "Planned pipeline",
  "Other",
];
