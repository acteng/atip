<script lang="ts">
  // Note this is different than the version in common/, because it changes the
  // style without refreshing the page. This is possible because there are no
  // extra sources/layers to manage.
  import { Select } from "lib/govuk";
  import { map } from "stores";

  export let disabled: boolean;

  let style = "dataviz";

  function changeStyle() {
    $map.setStyle(
      `https://api.maptiler.com/maps/${style}/style.json?key=${
        import.meta.env.VITE_MAPTILER_API_KEY
      }`
    );
  }
</script>

<Select
  label="Basemap"
  id="basemap"
  choices={[
    ["streets", "Streets"],
    ["hybrid", "Satellite"],
    ["dataviz", "Dataviz"],
  ]}
  bind:value={style}
  on:change={changeStyle}
  {disabled}
/>
