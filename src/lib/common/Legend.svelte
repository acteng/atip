<script lang="ts">
  import { CollapsibleCard, ColorLegend } from "./";

  // (Label, color) pairs
  export let rows: [string, string][];
</script>

<CollapsibleCard label="Legend">
  <ul>
    {#each rows as [label, color]}
      <li>
        <ColorLegend {color} />
        {label}
      </li>
    {/each}
  </ul>
</CollapsibleCard>
