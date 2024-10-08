<script lang="ts">
  import LayerControl from "../LayerControl.svelte";
  import { Popup, privateResourceBaseUrl, Legend } from "lib/common";
  import { layerId, constructMatchExpression } from "lib/maplibre";
  import { CircleLayer, GeoJSON } from "svelte-maplibre";
  import { showHideLayer } from "../url";

  let name = "problems";
  let title = "Issues & Conflicts";

  let show = showHideLayer(name);

  // Display full details in a certain order
  let keys = [
    "Issue ID",
    "Scheme ID",
    "Date Logged",
    "Inspector",

    "Street Location",
    "Code",

    "Issue Description",
    "External Inspectorate Comment for LA",

    "Issue Stage",
    "Resolved by Design",
    "Design Review Status",
    "Date of Resolution",
    "Design Resolution",
  ];

  let legend: [string, string][] = [
    ["Outstanding", "red"],
    ["Pending", "yellow"],
    ["Resolved", "green"],
    ["Not Applicable", "grey"],
    ["No Resolution Planned", "black"],
  ];
</script>

<LayerControl {name} {title} bind:show={$show}>
  <span slot="help">
    <p>
      Critical issues and policy conflicts from the Design Assistance Log. This
      is internally collected data.
    </p>
    <p>
      This layer is manually copied from a copy of the DA Log. The data is
      recent as of 10 June 2024.
    </p>
  </span>

  <div slot="controls" style="border: 1px solid black; padding: 8px;">
    <Legend rows={legend} />
  </div>
</LayerControl>

<GeoJSON data={`${privateResourceBaseUrl()}/v1/problems.geojson.gz`}>
  <CircleLayer
    {...layerId(name)}
    paint={{
      "circle-color": constructMatchExpression(
        ["get", "Design Review Status"],
        Object.fromEntries(legend),
        "cyan",
      ),
      "circle-opacity": 0.9,
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        1,
        2,
        8,
        3,
        13,
        15,
      ],
      "circle-stroke-color": "black",
      "circle-stroke-width": 0.1,
    }}
    layout={{
      visibility: $show ? "visible" : "none",
    }}
    hoverCursor="pointer"
    eventsIfTopMost
  >
    <Popup openOn="hover" let:props>
      <h2>{props["Issue ID"]} - {props["Code"]}</h2>
      <p>{props["Issue Stage"]}</p>
    </Popup>

    <Popup openOn="click" popupClass="border-popup" let:props>
      <div style="max-width: 30vw; max-height: 60vh; overflow: auto;">
        {#each keys as key}
          <p>
            {key}:
            <b>{props[key]}</b>
          </p>
        {/each}
      </div>
    </Popup>
  </CircleLayer>
</GeoJSON>

<style>
  :global(.border-popup .maplibregl-popup-content) {
    border: 1px solid black;
  }
</style>
