import type { Schema, Schemes } from "types";
import { findSmallestAuthority, type AuthorityBoundaries } from "boundaries";

// Returns the local storage key for a file
export function getKey(authority: string, filename: string): string {
  return `sketch/${authority}/${filename}`;
}

// Returns the URL to edit a file
export function getEditUrl(
  authority: string,
  filename: string,
  schema: Schema,
): string {
  return `scheme.html?authority=${authority}&file=${filename}&schema=${schema}`;
}

// Returns a list of filenames and the detected schema
export function listFilesInAuthority(authority: string): [string, Schema][] {
  let prefix = `sketch/${authority}/`;

  let list: [string, Schema][] = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    let key = window.localStorage.key(i)!;
    if (key.startsWith(prefix)) {
      let schema: Schema = "v1";
      try {
        schema = detectSchema(JSON.parse(window.localStorage.getItem(key)!));
      } catch (err) {}

      list.push([key.slice(prefix.length), schema]);
    }
  }
  list.sort();
  return list;
}

// Returns a list of all authorities with at least one file.
export function countFilesPerAuthority(): [string, number][] {
  let count: Map<string, number> = new Map();
  for (let i = 0; i < window.localStorage.length; i++) {
    let key = window.localStorage.key(i)!;
    let parts = key.split("/");
    if (parts.length == 3 && parts[0] == "sketch") {
      let authority = parts[1];
      let x = count.has(authority) ? count.get(authority)! : 0;
      count.set(authority, x + 1);
    }
  }

  let list: [string, number][] = [...count.entries()];
  // Sort by count descending
  list.sort((a, b) => b[1] - a[1]);
  return list;
}

export function downloadGeneratedFile(filename: string, textInput: string) {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(textInput),
  );
  element.setAttribute("download", filename);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// Detects old sketch files and renames them
export function importOldFiles(authority: string) {
  let rename = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    let key = window.localStorage.key(i)!;
    // We could attempt to scrape a scheme name as the filename, but it's
    // easier if users just manually rename this file
    if (key == authority) {
      rename.push([key, getKey(authority, "old v1 sketch")]);
    } else if (key == `${authority}_pipeline`) {
      rename.push([key, getKey(authority, "old pipeline sketch")]);
    }
  }

  for (let [oldKey, newKey] of rename) {
    // TODO What if we're about to override a key?
    console.log(`Renaming ${oldKey} to ${newKey}`);
    try {
      let contents = window.localStorage.getItem(oldKey)!;
      window.localStorage.setItem(newKey, contents);
      window.localStorage.removeItem(oldKey);
    } catch (err) {
      console.error(`Couldn't importOldFiles: ${err}`);
    }
  }
}

// Converts the state into a ready-to-save form
export function serializeSchemes(authority: string, gj: Schemes): Schemes {
  let copy = JSON.parse(JSON.stringify(gj));
  for (let feature of copy.features) {
    delete feature.properties.hide_while_editing;
  }
  copy.authority = authority;
  copy.origin = "atip-v2";
  return copy;
}

// Downloads something as a .geojson
export function exportFile(authority: string, filename: string, gj: Schemes) {
  let copy = serializeSchemes(authority, gj);
  downloadGeneratedFile(
    `${authority}_${filename}.geojson`,
    JSON.stringify(copy, null, "  "),
  );
}

export function detectSchema(gj: any): Schema {
  // Blindly assume the input is valid, and let the try/catch handle otherwise
  try {
    let scheme = Object.values(gj.schemes)[0];
    if (scheme && Object.hasOwn(scheme, "pipeline")) {
      return "pipeline";
    }
  } catch (err) {}

  return "v1";
}

// Import a sketch file, autodetecting its authority and schema. Write it to local storage, and return the URL of the sketch page to edit it. Throws an exception if any of this fails.
export function importFile(
  rawFilename: string,
  text: string,
  authoritiesGj: AuthorityBoundaries,
): string {
  let gj = JSON.parse(text);

  let smallestAuthority = findSmallestAuthority(gj.features, authoritiesGj);
  if (!smallestAuthority) {
    throw new Error(
      "Can't figure out the authority boundary that fully contains this scheme",
    );
  }
  // Ignore the authority that the file has set; always use the calculated boundary
  // TODO Will that ever be annoying? Keep the pre-set value if it's valid?
  gj.authority = smallestAuthority;

  let schema = detectSchema(gj);

  // TODO backfill?? or only do that when the sketch is loaded?

  // TODO Handle duplicate filenames
  let filename = cleanImportedFilename(rawFilename);

  window.localStorage.setItem(
    getKey(gj.authority, filename),
    JSON.stringify(serializeSchemes(gj.authority, gj)),
  );

  return getEditUrl(gj.authority, filename, schema);
}

// Returns all local storage items, sorted by size (in bytes) descending.
export function measureLocalStorageSizes(): [string, number][] {
  let list: [string, number][] = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    let key = window.localStorage.key(i)!;
    list.push([key, window.localStorage.getItem(key)!.length]);
  }
  // Sort by size descending
  list.sort((a, b) => b[1] - a[1]);
  return list;
}

function cleanImportedFilename(rawFilename: string): string {
  let filename = stripSuffix(stripSuffix(rawFilename, ".json"), ".geojson");

  // TODO Strip authority from the filename, in case it was included before
  return filename;
}

function stripSuffix(value: string, suffix: string): string {
  return value.endsWith(suffix) ? value.slice(0, -suffix.length) : value;
}