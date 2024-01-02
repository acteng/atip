<script lang="ts">
  import type { FeatureCollection } from "@maptiler/geocoding-control/types";
  import type { Position } from "geojson";
  import { routeTool } from "lib/draw/stores";
  import { TextInput } from "lib/govuk";
  import { emptyGeojson } from "lib/maplibre";
  import { map } from "stores";
  import { geocoderGj } from "./stores";

  let query = "";

  async function runQuery(query: string) {
    if (!query) {
      $geocoderGj = emptyGeojson() as FeatureCollection;
      return;
    }

    let params = new URLSearchParams({
      country: "gb",
      proximity: $map.getCenter().toArray().join(","),
      fuzzyMatch: "true",
      key: import.meta.env.VITE_MAPTILER_API_KEY,
    }).toString();
    let url = `https://api.maptiler.com/geocoding/${query}.json?${params}`;
    let resp = await fetch(url);
    let gj = await resp.json();
    // Add a number property for display
    let i = 1;
    for (let f of gj.features) {
      f.properties.number = i++;
    }
    $geocoderGj = gj;
  }
  $: runQuery(query);

  function add(e: MouseEvent, pt: Position) {
    // Stop the default href behavior
    e.preventDefault();
    $routeTool!.addSnappedWaypoint(pt);
    query = "";
  }
</script>

<TextInput label="Add waypoint by search" bind:value={query} />

<ol class="govuk-list govuk-list--number">
  {#each $geocoderGj.features as f}
    <!-- svelte-ignore a11y-invalid-attribute -->
    <li><a href="#" on:click={(e) => add(e, f.center)}>{f.place_name}</a></li>
  {/each}
</ol>
