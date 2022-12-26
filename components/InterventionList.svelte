<script>
  import Accordian from "./Accordian.svelte";
  import { gjScheme, emptyGeojson } from "../stores.js";

  function clearAll() {
    if (
      confirm(
        "Do you want to clear the current scheme? (You should save it first!)"
      )
    ) {
      gjScheme.set(emptyGeojson());
      // TODO Draw controls need to get set.
    }
  }

  function interventionName(feature) {
    if (feature.properties.intervention_name) {
      return feature.properties.intervention_name;
    }
    var noun = feature.properties.intervention_type;
    if (noun == "other") {
      if (feature.geometry.type == "Point") {
        noun = "point";
      } else if (feature.geometry.type == "LineString") {
        noun = "line";
      } else {
        noun = "polygon";
      }
    }
    return `Untitled ${noun}`;
  }
</script>

<div>
  <span>{$gjScheme.features.length} interventions</span>
  <button
    type="button"
    on:click={clearAll}
    disabled={$gjScheme.features.length == 0}>Clear all</button
  >
</div>

{#each $gjScheme.features as feature, i}
  <Accordian title="{i}) {interventionName(feature)}">
    <p>Placeholder contents</p>
    <pre>{JSON.stringify(feature)}</pre>
  </Accordian>
{/each}
