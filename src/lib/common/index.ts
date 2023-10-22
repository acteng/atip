import area from "@turf/area";
import booleanContains from "@turf/boolean-contains";
import type { FeatureCollection, Polygon } from "geojson";
import type { Scheme } from "types";
import authoritiesUrl from "../../../assets/authorities.geojson?url";

export { default as BaselayerSwitcher } from "./BaselayerSwitcher.svelte";
export { default as CollapsibleCard } from "./CollapsibleCard.svelte";
export { default as ColorLegend } from "./ColorLegend.svelte";
export { default as DiscreteLegend } from "./DiscreteLegend.svelte";
export { default as ExternalLink } from "./ExternalLink.svelte";
export { default as FileInput } from "./FileInput.svelte";
export { default as Geocoder } from "./Geocoder.svelte";
export { default as HelpButton } from "./HelpButton.svelte";
export { default as Layout } from "./Layout.svelte";
export { default as Legend } from "./Legend.svelte";
export { default as LineMeasureController } from "./LineMeasureController.svelte";
export { default as LoggedIn } from "./LoggedIn.svelte";
export { default as Popup } from "./Popup.svelte";
export { default as MapLibreMap } from "./MapLibreMap.svelte";
export { default as Modal } from "./Modal.svelte";
export { default as StreetViewHelp } from "./StreetViewHelp.svelte";
export { default as StreetViewTool } from "./StreetViewTool.svelte";
export { default as WarningIcon } from "./WarningIcon.svelte";
export { default as ZoomOutMap } from "./ZoomOutMap.svelte";

// TODO Specific types for the properties
export async function getAuthoritiesGeoJson(): Promise<
  FeatureCollection<Polygon>
> {
  const resp = await fetch(authoritiesUrl);
  let gj = await resp.json();
  // For convenience, fill out a derived property combining level and name, to
  // make a unique key.
  for (let f of gj.features) {
    f.properties.full_name = `${f.properties.level}_${f.properties.name}`;
  }
  return gj;
}

// Find the name of the smallest authority boundary completely containing the scheme.
export function findSmallestAuthority(
  gj: Scheme,
  authorities: FeatureCollection<Polygon>
): string | null {
  // First sort authorities by area.
  // TODO OK to mutate in here? And how expensive is this?
  authorities.features.sort((a, b) => area(a) - area(b));
  let f = authorities.features.find((authority) =>
    allFeaturesContainedByPolygon(gj.features, authority)
  );
  if (f) {
    return f.properties.full_name;
  }
  return null;
}

function allFeaturesContainedByPolygon(
  features: FeatureCollection,
  boundary: Feature<Polygon>
): boolean {
  for (let f of features) {
    // TODO Can't handle MultiPolygons. Fix the data upstream?
    if (boundary.geometry.type == "MultiPolygon") {
      return false;
    }

    if (!booleanContains(boundary, f)) {
      return false;
    }
  }
  return true;
}

export function appVersion(): string {
  // See .env for overrides.
  if (import.meta.env.VITE_MIMIC_GCP_LOCALLY === "true") {
    return "Private (development)";
  }

  if (window.location.hostname == "localhost") {
    return "Local development";
  } else if (window.location.hostname == "acteng.github.io") {
    let parts = window.location.pathname.split("/");
    if (parts.length == 3 && parts[0] == "" && parts[1] == "atip") {
      return "Public (development)";
    }
    if (parts.length == 4 && parts[0] == "" && parts[1] == "atip") {
      return `Public (dev branch: ${parts[2]})`;
    }
  } else if (window.location.hostname.endsWith(".appspot.com")) {
    // TODO Include a git commit, build timestamp, or similar
    return "Private (development)";
  }

  return "Unknown";
}

// See .env
export function publicResourceBaseUrl(): string {
  if (import.meta.env.VITE_RESOURCE_BASE) {
    return `${import.meta.env.VITE_RESOURCE_BASE}/layers`;
  }
  return "/layers";
}

export function privateResourceBaseUrl(): string {
  if (import.meta.env.VITE_RESOURCE_BASE) {
    return `${import.meta.env.VITE_RESOURCE_BASE}/private_layers`;
  }
  return "/private_layers";
}
