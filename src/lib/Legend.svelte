<script lang="ts">
  import { colors } from "../colors";

  export let planningMode: boolean;
</script>

<div>
  <h1>Interventions</h1>
  <ul>
    {#if planningMode}
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
</div>

<style>
  div {
    position: absolute;
    left: 10px;
    top: 60px;
    background-color: white;
    padding: 16px;
  }

  h1 {
    font-size: 2em;
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
