<script lang="ts">
  // This component can only be created once routeInfo is ready

  import type { GeoJSON, LineString } from "geojson";
  import { HelpButton } from "lib/common";
  import { gjScheme, routeInfo } from "stores";
  import { onMount } from "svelte";
  import type { Feature } from "types";
  import IntersectionMarkings from "./lane_details/IntersectionMarkings.svelte";
  import IntersectionPolygons from "./lane_details/IntersectionPolygons.svelte";
  import LaneMarkings from "./lane_details/LaneMarkings.svelte";
  import LanePolygons from "./lane_details/LanePolygons.svelte";

  // Show along a route
  export let id: number;

  // renderLaneDetailsForRoute returns 4 layers in a certain order. They're
  // labeled when used below.
  let gj1: GeoJSON;
  let gj2: GeoJSON;
  let gj3: GeoJSON;
  let gj4: GeoJSON;

  onMount(async () => {
    try {
      let linestring = $gjScheme.features.find(
        (f) => f.id == id
      ) as Feature<LineString>;
      let raw = await $routeInfo!.renderLaneDetailsForRoute(
        linestring.properties.waypoints!
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

<HelpButton>
  <p>
    This visualizes lane data according to OpenStreetMap. There may be many
    errors with incorrect or missing lane data, lane width and intersection
    geometry, and markings. Use with caution.
  </p>
</HelpButton>
