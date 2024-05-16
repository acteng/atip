<script lang="ts">
  import { SecondaryButton, Select } from "govuk-svelte";
  import { getStyleChoices } from "lib/maplibre";
  import { mapStyle } from "stores";
  import icon from "../../../assets/basemap.svg?url";

  export let disabled = false;

  let showControls = false;
</script>

{#if showControls}
  <SecondaryButton on:click={() => (showControls = false)}>
    <img src={icon} alt="Basemap" />
  </SecondaryButton>
  <Select
    label="Basemap"
    choices={getStyleChoices()}
    bind:value={$mapStyle}
    {disabled}
  />
{:else}
  <SecondaryButton on:click={() => (showControls = true)}>
    <img src={icon} alt="Basemap" />
  </SecondaryButton>
{/if}
