<script lang="ts">
  import type { Feature } from "geojson";
  import { Popup } from "svelte-maplibre";

  export let openOn: "hover" | "click" = "hover";

  function getProperties(features: Feature[] | null): { [name: string]: any } {
    if (!features) {
      return {};
    }
    return features[0].properties ?? {};
  }
</script>

<Popup {openOn} let:features>
  <div class="govuk-prose">
    <slot props={getProperties(features)} />
  </div>
</Popup>
