<script lang="ts">
  import { onMount } from "svelte";
  import { gjScheme, routeInfo } from "../../stores";
  import LanePolygons from "./lane_details/LanePolygons.svelte";
  import LaneMarkings from "./lane_details/LaneMarkings.svelte";

  // Show along a route if specified, or show all otherwise
  export let id: number | undefined;

  let gj1;
  let gj2;
  let gj3;
  let gj4;

  onMount(async () => {
    try {
      let raw;
      if (id) {
        let linestring = $gjScheme.features.find(
          (f) => f.id == id
        ) as Feature<LineString>;
        raw = await $routeInfo.renderLaneDetailsForRoute(
          linestring.properties.waypoints
        );
      } else {
        raw = await $routeInfo.renderAllLaneDetails();
      }
      gj1 = JSON.parse(raw[0]);
      gj2 = JSON.parse(raw[1]);
      //gj3 = JSON.parse(raw[2]);
      //gj4 = JSON.parse(raw[3]);
    } catch (e) {
      window.alert(`Couldn't render lane details: ${e}`);
    }
  });
</script>

{#if gj1}
  <LanePolygons gj={gj1} />
  <LaneMarkings gj={gj2} />
{/if}
