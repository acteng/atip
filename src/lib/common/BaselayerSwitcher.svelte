<script lang="ts">
  import { Select } from "lib/govuk";
  import { getStyleChoices } from "lib/maplibre";

  // TODO Be specific about "streets" | "hybrid", but then we need actual error
  // handling when we parse it from URL params
  export let style: string;

  function changeStyle() {
    let params = new URLSearchParams(window.location.search);
    params.set("style", style);
    let href = `${window.location.pathname}?${params.toString()}${
      window.location.hash
    }`;
    window.location.href = href;
  }
</script>

<Select
  label="Basemap"
  id="basemap"
  choices={getStyleChoices()}
  bind:value={style}
  on:change={changeStyle}
/>
