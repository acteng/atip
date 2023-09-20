<script lang="ts">
  // Note this is different than the version in common/, because it changes the
  // style without refreshing the page. This is possible because there are no
  // extra sources/layers to manage.
  import { Select } from "lib/govuk";
  import { getStyleChoices, getStyleSpecification } from "lib/maplibre";
  import { map } from "stores";

  export let style: string;
  export let disabled: boolean;

  async function changeStyle() {
    $map.setStyle(await getStyleSpecification(style));
  }
</script>

<Select
  label="Basemap"
  id="basemap"
  choices={getStyleChoices()}
  bind:value={style}
  on:change={changeStyle}
  {disabled}
/>
