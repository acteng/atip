<script lang="ts">
  import { colors } from "../colors";
  import type { Schema, Scheme } from "../types";
  import CollapsibleCard from "./common/CollapsibleCard.svelte";

  export let schema: Schema;
</script>

<div>
  <CollapsibleCard label="Objects" open>
    <ul>
      {#if schema == "planning"}
        <li><span style:background={colors.preapp} />Preapp</li>
        <li><span style:background={colors.outline} />Outline</li>
        <li>
          <span style:background={colors["reserved matters"]} />Reserved matters
        </li>
        <li><span style:background={colors["local plan"]} />Local plan</li>
      {:else}
        <li><span style:background={colors.area} />Areas</li>
        <li><span style:background={colors.route} />Routes</li>
        <li><span style:background={colors.crossing} />Crossings</li>
        <li><span style:background={colors.other} />Other</li>
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

  span {
    display: block;
    float: left;
    height: 16px;
    width: 30px;
    margin-right: 5px;
    border: 1px solid #999;
  }
</style>
