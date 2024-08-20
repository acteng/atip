<script lang="ts">
  import { Select } from "govuk-svelte";
  import { getStyleChoices } from "lib/maplibre";
  import { mapStyle } from "stores";

  export let disabled = false;
</script>

<Select
  label="Basemap"
  choices={getStyleChoices()}
  bind:value={$mapStyle}
  {disabled}
/>

{#if $mapStyle == "google"}
  <p>
    Google <a
      href="https://cloud.google.com/maps-platform/terms/"
      target="_blank"
    >
      Terms of Use
    </a>
    and
    <a href="https://www.google.com/policies/privacy/" target="_blank">
      Privacy Policy
    </a>
  </p>
{/if}
