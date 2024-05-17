<script lang="ts">
  import { interactiveMapLayersEnabled } from "./stores";
  import {
    BaselayerSwitcher,
    LineMeasureTool,
    StreetViewTool,
  } from "lib/common";
  import { FillLayer, GeoJSON } from "svelte-maplibre";
  import { layerId } from "lib/maplibre";

  // Workaround for https://github.com/sveltejs/svelte/issues/7630
  $: streetviewEnabled = !$interactiveMapLayersEnabled;
  $: interactiveMapLayersEnabled.set(!streetviewEnabled);

  // When StreetView is on, disable interactive layers -- no hovering or
  // clicking behavior. Achieve this by enabling an invisible layer on top of
  // everything.
  let coverEverything = {
    type: "Feature" as const,
    properties: {},
    geometry: {
      type: "Polygon" as const,
      coordinates: [
        [
          [180.0, 90.0],
          [-180.0, 90.0],
          [-180.0, -90.0],
          [180.0, -90.0],
          [180.0, 90.0],
        ],
      ],
    },
  };
</script>

<div class="govuk-prose">
  <StreetViewTool bind:enabled={streetviewEnabled} />
  <LineMeasureTool />
  <BaselayerSwitcher disabled={!$interactiveMapLayersEnabled} />
</div>

<GeoJSON data={coverEverything}>
  <FillLayer
    {...layerId("cover-interactive-layers")}
    paint={{
      "fill-color": "black",
      "fill-opacity": 0.0,
    }}
    layout={{
      visibility: $interactiveMapLayersEnabled ? "none" : "visible",
    }}
  />
</GeoJSON>

<style>
  div {
    background-color: white;

    display: flex;
  }
</style>
