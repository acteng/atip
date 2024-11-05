// These stores are used in both the draw and browse pages.

import type { Map } from "maplibre-gl";
import { writable, type Writable } from "svelte/store";
import { type Schema } from "./types";

// Note this must be set before gjSchemes in lib/draw/stores.ts
export const schema: Writable<Schema> = writable(defaultSchema());

// A global singleton, containing a loaded map
// @ts-expect-error TODO By construction, no components using the store should be
// mounted before this is populated.
export const map: Writable<Map> = writable(null);

export const mapStyle: Writable<string> = writable("dataviz");

function defaultSchema(): Schema {
  let params = new URLSearchParams(window.location.search);
  let schema = params.get("schema");
  if (schema && (schema == "v1" || schema == "pipeline")) {
    return schema;
  }

  // Use the pipeline schema on that semi-permanent branch
  if (
    window.location.hostname == "acteng.github.io" &&
    window.location.pathname.startsWith("/atip/pipeline/")
  ) {
    return "pipeline";
  }

  return "v1";
}
