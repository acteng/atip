import { map as mapStore } from "stores";
import { get } from "svelte/store";
import { LayerHelper } from "./layer_helper";

// Each MapTiler basemap style uses different layer IDs for roads and paths

const datavizLayers = ["Road network", "Path"];

function streetsLayers() {
  let layers = [];
  for (let outer of ["road", "bridge", "tunnel"]) {
    for (let inner of [
      "link",
      "minor",
      "minor_construction",
      "motorway",
      "motorway_construction",
      "motorway_link",
      "path_pedestrian",
      "secondary_tertiary",
      "secondary_tertiary_construction",
      "service_track",
      "service_track_construction",
      "street",
      "trunk_primary",
      "trunk_primary_construction",
      "trunk_primary_link",
    ]) {
      layers.push(`${outer}_${inner}`);
    }
  }
  return layers;
}

const satelliteLayers = ["Path", "Road", "Tunnel"];

// OS raster layers don't have anything we can use
const roadLayerIds = datavizLayers.concat(streetsLayers(), satelliteLayers);

// If the basemap style changes dynamically, be careful about saving this.
export function getRoadLayerHelpers(): LayerHelper[] {
  return get(mapStore)
    .getStyle()
    .layers.filter((layer) => {
      return roadLayerIds.includes(layer.id);
    })
    .map((layer) => {
      return new LayerHelper(layer);
    });
}
