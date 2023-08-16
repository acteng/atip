<script lang="ts">
  import type { FeatureCollection } from "geojson";
  import { gjScheme, map } from "../../stores";
  import { CollapsibleCard } from "../common";
  import { SecondaryButton } from "../govuk";
  import { MapLibreUtils } from "../maplibre";
  import type { Scheme } from "./data";

  export let scheme: Scheme;
  export let authorityNames: Set<string>;

  let disableEdit = !authorityNames.has(scheme.authority_or_region);
  let editTooltip = disableEdit
    ? "This scheme doesn't have an authority specified correctly, so you can't edit this scheme. We're working to fix this problem."
    : undefined;

  function showScheme() {
    // TODO Highlight on the map? Or fade everything else?
    let gj: FeatureCollection = {
      type: "FeatureCollection",
      features: $gjScheme.features.filter(
        (f) => f.properties.scheme_reference == scheme.scheme_reference
      ),
    };
    $map?.fitBounds(MapLibreUtils.bbox(gj), { padding: 20, animate: false });
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
    <SecondaryButton
      on:click={editScheme}
      disabled={disableEdit}
      title={editTooltip}
    >
      Edit scheme locally
    </SecondaryButton>
  </div>
</CollapsibleCard>
