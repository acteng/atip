import type { Feature, Schemes, SchemeData } from "types";
import {
  atfSchemesGj,
  atfSchemes as atfSchemesStore,
  lcwipSchemesGj,
  lcwipSchemes as lcwipSchemesStore,
} from "./stores";

// Takes a GeoJSON file representing a bunch of scheme files combined into one.
// Populates the two stores for each of ATF and LCWIP schemes.
export function setupSchemes(gj: Schemes) {
  let atfGj: Schemes = {
    type: "FeatureCollection",
    features: [],
    schemes: {},
    // TODO For now, duplicate the notes between the two. Later, these will become two separate files
    notes: gj.notes,
  };
  let atfSchemes: Map<string, SchemeData> = new Map();

  let lcwipGj: Schemes = {
    type: "FeatureCollection",
    features: [],
    schemes: {},
    notes: gj.notes,
  };
  let lcwipSchemes: Map<string, SchemeData> = new Map();

  for (let [scheme_reference, scheme] of Object.entries(gj.schemes)) {
    if (scheme.pipeline) {
      lcwipSchemes.set(scheme_reference, scheme);
      lcwipGj.schemes[scheme_reference] = scheme;
    } else {
      atfSchemes.set(scheme_reference, scheme);
      atfGj.schemes[scheme_reference] = scheme;
    }
  }

  for (let feature of gj.features) {
    if (!keepFeature(feature)) {
      continue;
    }

    let scheme_reference = feature.properties.scheme_reference;
    let is_atf = atfSchemes.has(scheme_reference);

    let schemes = is_atf ? atfSchemes : lcwipSchemes;
    let scheme = schemes.get(scheme_reference)!;
    if (scheme.browse) {
      // TODO For easy styling, copy one field from scheme to all its features.
      // As we have more cases like this, revisit what's most performant.
      // TODO Aren't these only for LCWIP?
      feature.properties.funding_programme = scheme.browse.funding_programme;
      feature.properties.current_milestone = scheme.browse.current_milestone;
    }

    let gj = is_atf ? atfGj : lcwipGj;
    // Force numeric IDs (skipping 0) for hovering to work
    feature.id = gj.features.length + 1;
    gj.features.push(feature);
  }

  atfSchemesGj.set(atfGj);
  atfSchemesStore.set(atfSchemes);
  lcwipSchemesGj.set(lcwipGj);
  lcwipSchemesStore.set(lcwipSchemes);
}

// These should ideally be fixed during upstream data validation processes.
function keepFeature(feature: Feature): boolean {
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

  if (hugeAreas.includes(feature.properties.id)) {
    return false;
  }

  return true;
}

export const fundingProgrammesForColouringAndFiltering = [
  "ATF2",
  "ATF2 or ATF3",
  "ATF3",
  "ATF4",
  "ATF4E",
  "Planned pipeline",
  "Other",
];
