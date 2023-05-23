<script lang="ts">
  import type { LineString } from "geojson";
  import type { Feature } from "../../types";
  import { onMount } from "svelte";
  import { gjScheme, routeInfo } from "../../stores";
  import LanePolygons from "./lane_details/LanePolygons.svelte";
  import LaneMarkings from "./lane_details/LaneMarkings.svelte";
  import IntersectionPolygons from "./lane_details/IntersectionPolygons.svelte";
  import IntersectionMarkings from "./lane_details/IntersectionMarkings.svelte";
  import HelpIcon from "../common/HelpIcon.svelte";

  // Show along a route
  export let id: number;

  let gj1;
  let gj2;
  let gj3;
  let gj4;

  onMount(async () => {
    try {
      let linestring = $gjScheme.features.find(
        (f) => f.id == id
      ) as Feature<LineString>;
      let raw = await $routeInfo.renderLaneDetailsForRoute(
        linestring.properties.waypoints
      );
      gj1 = JSON.parse(raw[0]);
      gj2 = JSON.parse(raw[1]);
      gj3 = JSON.parse(raw[2]);
      gj4 = JSON.parse(raw[3]);
    } catch (e) {
      window.alert(`Couldn't render lane details: ${e}`);
    }
  });
</script>

{#if gj1}
  <LanePolygons gj={gj1} />
  <LaneMarkings gj={gj2} />
  <IntersectionPolygons gj={gj3} />
  <IntersectionMarkings gj={gj4} />
{/if}

<HelpIcon
  contents="This visualizes lane data according to OpenStreetMap. There may be many errors with incorrect or missing lane data, lane width and intersection geometry, and markings. Use with caution."
/>
