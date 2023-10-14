<script lang="ts">
  // Use this component instead of the one from svelte-maplibre, to more
  // conveniently get the properties of the topmost feature and for govuk
  // styling.
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

<Popup {openOn} openIfTopMost let:features>
  <div class="govuk-prose">
    <slot props={getProperties(features)} feature={features[0]} />
  </div>
</Popup>
