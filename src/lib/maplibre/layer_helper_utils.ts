import { get } from "svelte/store";
import { map as mapStore } from "../../stores";
import { LayerHelper } from "./layer_helper";

export const roadLayerIds = [
  "road_minor",
  "road_secondary_tertiary",
  "road_motorway",
  "road_trunk_primary",
  "road_link",
  "road_motorway_link",
  "road_trunk_primary_link",
  "road_minor",
  "bridge_street",
  "bridge_minor",
  "bridge_secondary_tertiary",
  "bridge_trunk_primary",
  "bridge_motorway",
  "tunnel_minor",
  "tunnel_secondary_tertiary",
  "tunnel_trunk_primary",
  "tunnel_motorway",
  "road_service_track",
  "Road network",
];

export const getRoadLayerHelpers: () => Array<LayerHelper> = () => {
  const mapValue = get(mapStore);
  return mapValue
    .getStyle()
    .layers.filter((layer: any) => {
      return roadLayerIds.includes(layer.id);
    })
    .map((layer) => {
      return new LayerHelper(layer);
    });
};
