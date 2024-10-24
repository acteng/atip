import { fixBoundaries, type AuthorityBoundaries } from "boundaries";
import authoritiesUrl from "../../../assets/authorities.geojson?url";

export { default as Alpha } from "./Alpha.svelte";
export { default as BaselayerSwitcher } from "./BaselayerSwitcher.svelte";
export { default as ColorLegend } from "./ColorLegend.svelte";
export { default as ExternalLink } from "./ExternalLink.svelte";
export { default as Geocoder } from "./Geocoder.svelte";
export { default as Header } from "./Header.svelte";
export { default as Layout } from "./Layout.svelte";
export { default as Legend } from "./Legend.svelte";
export { default as LineMeasureTool } from "./LineMeasureTool.svelte";
export { default as LoggedIn } from "./LoggedIn.svelte";
export { default as Popup } from "./Popup.svelte";
export { default as MapLibreMap } from "./MapLibreMap.svelte";
export { default as ZoomOutMap } from "./ZoomOutMap.svelte";
export * from "./storage";
export { HelpButton, Modal, WarningIcon } from "scheme-sketcher-lib/common";

export async function getAuthoritiesGeoJson(): Promise<AuthorityBoundaries> {
  let resp = await fetch(authoritiesUrl);
  let gj = await resp.json();
  return fixBoundaries(gj);
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

// Fetch a URL and return bytes. Along the way, calls setProgress with a number [0, 100] -- but sometimes over 100 when the file is compressed. This function will throw if the server doesn't send back a Content-Length header.
export async function fetchWithProgress(
  url: string,
  setProgress: (progress: number) => void,
): Promise<Uint8Array> {
  let response = await fetch(url);
  // TODO Handle error cases better
  let reader = response.body!.getReader();

  let lengthHeader = response.headers.get("Content-Length");
  if (!lengthHeader) {
    throw new Error(`No Content-Length header from ${url}`);
  }
  let contentLength = parseInt(lengthHeader);

  let receivedLength = 0;
  let chunks = [];
  while (true) {
    let { done, value } = await reader.read();
    if (done) {
      break;
    }

    if (value) {
      chunks.push(value);
      receivedLength += value.length;

      setProgress((100.0 * receivedLength) / contentLength);
    }
  }

  let allChunks = new Uint8Array(receivedLength);
  let position = 0;
  for (let chunk of chunks) {
    allChunks.set(chunk, position);
    position += chunk.length;
  }

  return allChunks;
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
