<script>
  import Accordian from "./Accordian.svelte";
  import Form from "./Form.svelte";
  import { gjScheme, currentSidebarHover, currentMapHover } from "../stores.js";

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

  function onmouseover(id) {
    return () => {
      currentSidebarHover.set(id);
    };
  }
  let onmouseout = () => {
    currentSidebarHover.set(null);
  };
</script>

{#each $gjScheme.features as feature, i}
  <Accordian
    title="{i + 1}) {interventionName(feature)}"
    onmouseover={onmouseover(feature.id)}
    {onmouseout}
    show_active={feature.id == $currentMapHover}
  >
    <Form
      id={feature.id}
      bind:name={feature.properties.name}
      bind:intervention_type={feature.properties.intervention_type}
      bind:description={feature.properties.description}
    />
  </Accordian>
{/each}
