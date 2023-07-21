<script lang="ts">
  import type { FeatureCollection } from "geojson";
  import { bbox } from "../../maplibre_helpers";
  import { gjScheme, map } from "../../stores";
  import { CollapsibleCard } from "../common";
  import { SecondaryButton } from "../govuk";
  import type { Scheme } from "./data";

  export let scheme: Scheme;

  function showScheme() {
    // TODO Highlight on the map? Or fade everything else?
    let gj: FeatureCollection = {
      type: "FeatureCollection",
      features: $gjScheme.features.filter(
        (f) => f.properties.scheme_reference == scheme.scheme_reference
      ),
    };
    $map?.fitBounds(bbox(gj), { padding: 20, animate: false });
  }

  function editScheme() {
    let gj = {
      type: "FeatureCollection",
      features: $gjScheme.features.filter(
        (f) => f.properties.scheme_reference == scheme.scheme_reference
      ),
    };
    let filename = scheme.authority_or_region;
    // Assuming the schema is always v1

    // Put the file in local storage, so it'll be loaded from the next page
    window.localStorage.setItem(filename, JSON.stringify(gj));
    window.open(
      `scheme.html?authority=${scheme.authority_or_region}`,
      "_blank"
    );
  }
</script>

<CollapsibleCard
  label={`${scheme.scheme_reference}: ${scheme.num_features} features`}
>
  <p>Authority or region: {scheme.authority_or_region}</p>
  <p>Capital scheme ID: {scheme.capital_scheme_id}</p>
  <p>Funding programme: {scheme.funding_programme}</p>
  <div class="govuk-button-group">
    <SecondaryButton on:click={showScheme}>Show on map</SecondaryButton>
    <SecondaryButton on:click={editScheme}>Edit scheme</SecondaryButton>
  </div>
</CollapsibleCard>
