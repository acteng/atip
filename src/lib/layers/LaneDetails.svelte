<script lang="ts">
  import { onMount } from "svelte";
  import { gjScheme, routeInfo } from "../../stores";
  import LanePolygons from "./lane_details/LanePolygons.svelte";
  import LaneMarkings from "./lane_details/LaneMarkings.svelte";

  let gj1;
  let gj2;
  let gj3;
  let gj4;

  onMount(async () => {
    try {
      console.log("GIMME");
      let raw = await $routeInfo.renderLaneDetails();
      gj1 = JSON.parse(raw[0]);
      gj2 = JSON.parse(raw[1]);
      //gj3 = JSON.parse(raw[2]);
      //gj4 = JSON.parse(raw[3]);
    } catch (e) {
      window.alert(`Couldn't calculate speed limits for route: ${e}`);
    }
  });

</script>

{#if gj1}
  <LanePolygons gj={gj1} />
  <LaneMarkings gj={gj2} />
{/if}
