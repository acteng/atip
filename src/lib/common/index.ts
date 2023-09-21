import type { FeatureCollection, Polygon } from "geojson";
import authoritiesUrl from "../../../assets/authorities.geojson?url";

export { default as BaselayerSwitcher } from "./BaselayerSwitcher.svelte";
export { default as CollapsibleCard } from "./CollapsibleCard.svelte";
export { default as ColorLegend } from "./ColorLegend.svelte";
export { default as ConfirmationModal } from "./ConfirmationModal.svelte";
export { default as DiscreteLegend } from "./DiscreteLegend.svelte";
export { default as ExternalLink } from "./ExternalLink.svelte";
export { default as FileInput } from "./FileInput.svelte";
export { default as HelpButton } from "./HelpButton.svelte";
export { default as InteractiveLayer } from "./InteractiveLayer.svelte";
export { default as Layout } from "./Layout.svelte";
export { default as Legend } from "./Legend.svelte";
export { default as LoggedIn } from "./LoggedIn.svelte";
export { default as MapLibreMap } from "./MapLibreMap.svelte";
export { default as Modal } from "./Modal.svelte";
export { default as StreetViewController } from "./StreetViewController.svelte";
export { default as ZoomOutMap } from "./ZoomOutMap.svelte";

export async function getAuthoritiesGeoJson(): Promise<
  FeatureCollection<Polygon>
> {
  const resp = await fetch(authoritiesUrl);
  return await resp.json();
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
