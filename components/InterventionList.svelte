<script>
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
  <div>{i}) {feature.id}</div>
{/each}
