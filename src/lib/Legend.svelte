<script lang="ts">
  import { colors } from "../colors";
  import type { Schema } from "../types";
  import { CollapsibleCard, ColorLegend } from "./common";

  export let schema: Schema;
</script>

<div>
  <CollapsibleCard label="Objects" open>
    <ul>
      {#if schema == "planning"}
        <li>
          <ColorLegend color={colors.preapp} />
          Preapp
        </li>
        <li>
          <ColorLegend color={colors.outline} />
          Outline
        </li>
        <li>
          <ColorLegend color={colors["reserved matters"]} />
          Reserved matters
        </li>
        <li>
          <ColorLegend color={colors["local plan"]} />
          Local plan
        </li>
      {:else}
        <li>
          <ColorLegend color={colors.area} />
          Areas
        </li>
        <li>
          <ColorLegend color={colors.route} />
          Routes
        </li>
        <li>
          <ColorLegend color={colors.crossing} />
          Crossings
        </li>
        <li>
          <ColorLegend color={colors.other} />
          Other
        </li>
      {/if}
    </ul>
  </CollapsibleCard>
</div>

<style>
  div {
    position: absolute;
    left: 10px;
    top: 60px;
    background-color: white;
    padding: 16px;
  }
</style>
