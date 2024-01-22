<script lang="ts">
  import { ColorLegend } from "./";

  // (Label, color) pairs
  export let rows: [string, string][];
</script>

<ul>
  {#each rows as [label, color]}
    <li>
      <ColorLegend {color} />
      {label}
    </li>
  {/each}
</ul>
