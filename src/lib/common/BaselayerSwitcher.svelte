<script lang="ts">
  import { Select } from "govuk-svelte";
  import { getStyleChoices } from "lib/maplibre";
  import { mapStyle } from "stores";
  import icon from "../../../assets/basemap.svg?url";
  import { IconButton } from "./";

  export let disabled = false;

  let showControls = false;
</script>

{#if showControls}
  <div style="display: flex; flex-flow: column">
    <IconButton on:click={() => (showControls = false)} activated>
      <img src={icon} alt="Basemap" />
    </IconButton>
    <Select
      label="Basemap"
      choices={getStyleChoices()}
      bind:value={$mapStyle}
      {disabled}
    />
  </div>
{:else}
  <IconButton on:click={() => (showControls = true)}>
    <img src={icon} alt="Basemap" />
  </IconButton>
{/if}
