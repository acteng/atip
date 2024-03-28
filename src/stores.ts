// These stores are used in both the draw and browse pages.

import type { Map } from "maplibre-gl";
import { writable, type Writable } from "svelte/store";
import { isStreetViewImagery, type Schema, type UserSettings } from "./types";
import { setLocalStorageItem } from "lib/common"

// Note this must be set before gjSchemeCollection in lib/draw/stores.ts
export const schema: Writable<Schema> = writable(defaultSchema());

// A global singleton, containing a loaded map
// @ts-ignore TODO By construction, no components using the store should be
// mounted before this is populated.
export const map: Writable<Map> = writable(null);

export const mapStyle: Writable<string> = writable("dataviz");

export const userSettings: Writable<UserSettings> =
  writable(loadUserSettings());
userSettings.subscribe((value) =>
  setLocalStorageItem("userSettings", JSON.stringify(value)),
);

function loadUserSettings(): UserSettings {
  let settings = {
    streetViewImagery: "google",
    avoidDoublingBack: false,
  };

  // Be paranoid when loading from local storage, and only copy over valid items
  try {
    let x = JSON.parse(window.localStorage.getItem("userSettings") || "{}");
    if (isStreetViewImagery(x.streetViewImagery)) {
      settings.streetViewImagery = x.streetViewImagery;
    }
    if (typeof x.avoidDoublingBack == "boolean") {
      settings.avoidDoublingBack = x.avoidDoublingBack;
    }
  } catch (error) {
    console.log(`Couldn't parse userSettings from local storage: ${error}`);
  }
  // The cast is necessary, because of streetViewImagery looking like just a string
  return settings as UserSettings;
}

function defaultSchema(): Schema {
  let params = new URLSearchParams(window.location.search);
  if (params.get("schema")) {
    return params.get("schema") as Schema;
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
