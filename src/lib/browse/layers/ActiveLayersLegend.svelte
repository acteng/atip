<script lang="ts">
  import { activeLayers } from "./url";
  import { layerLegends } from "./stores";

  let container: HTMLDivElement | null = null;

  function update(
    container: HTMLDivElement | null,
    activeLayers: Set<string>,
    layerLegends: Map<string, HTMLDivElement>,
  ) {
    if (container) {
      container.innerHTML = "";
      for (let l of activeLayers) {
        let obj = layerLegends.get(l);
        // Layers can be immediately active from the URL, before the DOM element is registered
        if (obj) {
          obj.style.display = "block";
          container.appendChild(obj);
        }
      }
    }
  }
  $: update(container, $activeLayers, $layerLegends);
</script>

<p>Active layers</p>
<div bind:this={container} />
