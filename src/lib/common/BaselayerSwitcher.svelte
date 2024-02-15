<script lang="ts">
  import { Select } from "lib/govuk";
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
