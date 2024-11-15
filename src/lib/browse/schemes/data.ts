import type { Feature, Schemes } from "types";
import type { Writable } from "svelte/store";

// Takes a GeoJSON file representing a bunch of scheme files combined into one.
// Populates the two stores for each of ATF and LCWIP schemes.
export function setupSchemes(
  gj: Schemes,
  atfStore: Writable<Schemes>,
  lcwipStore: Writable<Schemes>,
) {
  let atfGj: Schemes = {
    type: "FeatureCollection",
    features: [],
    schemes: {},
    // TODO For now, duplicate the notes between the two. Later, these will become two separate files
    notes: gj.notes,
  };

  let lcwipGj: Schemes = {
    type: "FeatureCollection",
    features: [],
    schemes: {},
    notes: gj.notes,
  };

  for (let [scheme_reference, scheme] of Object.entries(gj.schemes)) {
    if (scheme.pipeline) {
      lcwipGj.schemes[scheme_reference] = scheme;
    } else {
      atfGj.schemes[scheme_reference] = scheme;
    }
  }

  for (let feature of gj.features) {
    if (!keepFeature(feature)) {
      continue;
    }

    let scheme_reference = feature.properties.scheme_reference;
    let is_atf = Object.hasOwn(atfGj.schemes, scheme_reference);

    let scheme = is_atf
      ? atfGj.schemes[scheme_reference]
      : lcwipGj.schemes[scheme_reference];
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

  atfStore.set(atfGj);
  lcwipStore.set(lcwipGj);
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

// Combines all sketches in local storage into one big Schemes object
export function importAllLocalSketches(): Schemes {
  let result: Schemes = {
    type: "FeatureCollection",
    features: [],
    schemes: {},
    notes: [
      "These schemes are everything you've drawn in this browser using Scheme Sketcher. The data source and accuracy depend on whatever files you imported, created, or edited yourself.",
    ],
  };

  for (let i = 0; i < window.localStorage.length; i++) {
    let key = window.localStorage.key(i)!;
    let parts = key.split("/");
    if (parts.length != 3 || parts[0] != "sketch") {
      continue;
    }
    try {
      let gj: Schemes = JSON.parse(window.localStorage.getItem(key)!);
      // Skip empty sketches
      if (gj.features.length == 0) {
        continue;
      }

      // Set up browse data
      for (let scheme of Object.values(gj.schemes)) {
        scheme.browse = {
          authority_or_region: parts[1],
          local_filename: parts[2],
        };
      }

      // There's lots more validation we could do -- checking if every feature
      // has a scheme, checking for duplicate scheme references, etc.

      result.schemes = { ...result.schemes, ...gj.schemes };
      result.features = [...result.features, ...gj.features];
    } catch (err) {}
  }

  // Fix feature IDs
  let id = 1;
  for (let f of result.features) {
    f.id = id++;
  }

  return result;
}
