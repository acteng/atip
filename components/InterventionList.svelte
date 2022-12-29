<script>
  import Accordian from "./Accordian.svelte";
  import Form from "./Form.svelte";
  import { gjScheme } from "../stores.js";

  function interventionName(feature) {
    if (feature.properties.name) {
      return feature.properties.name;
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

{#each $gjScheme.features as feature, i}
  <Accordian title="{i}) {interventionName(feature)}">
    <Form
      id={feature.id}
      bind:name={feature.properties.name}
      bind:intervention_type={feature.properties.intervention_type}
      bind:description={feature.properties.description}
    />
  </Accordian>
{/each}
