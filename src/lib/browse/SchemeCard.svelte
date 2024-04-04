<script lang="ts">
  import type { FeatureCollection } from "geojson";
  import { CollapsibleCard, ButtonGroup, SecondaryButton } from "govuk-svelte";
  import { bbox } from "lib/maplibre";
  import { map } from "stores";
  import type { SchemeData } from "types";
  import { schemesGj } from "./stores";
  import { setLocalStorageItem } from "lib/common";

  export let scheme: SchemeData;

  function showScheme() {
    // TODO Highlight on the map? Or fade everything else?
    let gj: FeatureCollection = {
      type: "FeatureCollection",
      features: $schemesGj.features.filter(
        (f) => f.properties.scheme_reference == scheme.scheme_reference,
      ),
    };
    $map?.fitBounds(bbox(gj), { padding: 20, animate: false });
  }

  function editScheme() {
    let gj = {
      type: "FeatureCollection",
      features: $schemesGj.features.filter(
        (f) => f.properties.scheme_reference == scheme.scheme_reference,
      ),
    };
    let filename = scheme.browse?.authority_or_region || "unknown authority";
    // Assuming the schema is always v1

    // Put the file in local storage, so it'll be loaded from the next page
    setLocalStorageItem(filename, JSON.stringify(gj));
    window.open(
      `scheme.html?authority=${scheme.browse?.authority_or_region}`,
      "_blank",
    );
  }
</script>

<CollapsibleCard label={`${scheme.scheme_name}`}>
  <p>Scheme reference: {scheme.scheme_reference}</p>
  <p>Authority or region: {scheme.browse?.authority_or_region}</p>
  <p>Capital scheme ID: {scheme.browse?.capital_scheme_id}</p>
  <p>Funding programme: {scheme.browse?.funding_programme}</p>
  {#if scheme.browse?.current_milestone}
    <p>Current milestone: {scheme.browse?.current_milestone}</p>
  {/if}
  <ButtonGroup>
    <SecondaryButton on:click={showScheme}>Show on map</SecondaryButton>
    <SecondaryButton on:click={editScheme}>Edit scheme locally</SecondaryButton>
  </ButtonGroup>
</CollapsibleCard>
