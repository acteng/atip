<script lang="ts">
  import { Select } from "lib/govuk";
  import { getStyleChoices } from "lib/maplibre";
  import { mapStyle } from "stores";

  export let disabled = false;
</script>

<Select
  label="Basemap"
  id="basemap"
  choices={getStyleChoices()}
  bind:value={$mapStyle}
  {disabled}
/>
