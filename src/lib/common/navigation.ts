import { schema as schemaStore } from "../../stores";
import { get } from "svelte/store";

export function openBrowsePage() {
  window.location.href = "browse.html";
}

export function startSketching(authorityName: string) {
  window.location.href = `scheme.html?authority=${authorityName}&schema=${get(schemaStore)}`;
}

export function openChooseSketchArea() {
  window.location.href = "/";
}
