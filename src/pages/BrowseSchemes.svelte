<script lang="ts">
  // @ts-nocheck
  // TODO After figuring out the features of this page, work on the errors
  // here. Need to decide how much we use gjScheme, and what new feature-level
  // properties to expect.
  import { initAll } from "govuk-frontend";
  import "../style/main.css";
  import type { GeoJSON } from "geojson";
  import { onDestroy, onMount } from "svelte";
  import BaselayerSwitcher from "../lib/BaselayerSwitcher.svelte";
  import CollapsibleCard from "../lib/common/CollapsibleCard.svelte";
  import FileInput from "../lib/common/FileInput.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import MapTooltips from "../lib/common/MapTooltips.svelte";
  import InterventionLayer from "../lib/draw/InterventionLayer.svelte";
  import ErrorMessage from "../lib/govuk/ErrorMessage.svelte";
  import FormElement from "../lib/govuk/FormElement.svelte";
  import SecondaryButton from "../lib/govuk/SecondaryButton.svelte";
  import Legend from "../lib/Legend.svelte";
  import Map from "../lib/Map.svelte";
  import ZoomOutMap from "../lib/ZoomOutMap.svelte";
  import { bbox } from "../maplibre_helpers";
  import { gjScheme, map } from "../stores";

  onMount(() => {
    // For govuk components. Must happen here.
    initAll();
  });

  const params = new URLSearchParams(window.location.search);
  let style: string = params.get("style") || "streets";
  const schema = "v1";
  let errorMessage = "";

  interface Scheme {
    scheme_reference: string;
    authority_or_region: string;
    capital_scheme_id: string;
    funding_programme: string;
    num_features: number;
  }

  // unique by scheme_reference
  let schemes: Scheme[] = [];
  let filterText = "";
  // by scheme_reference
  let showSchemes: Set<string> = new Set();

  // Stats about filtered schemes
  // TODO Extract into a component
  let counts = { area: 0, route: 0, crossing: 0, other: 0 };

  onDestroy(() => {
    gjScheme.set(null);
  });

  $: {
    // When schemes or filter changes, update showSchemes
    showSchemes.clear();
    if (filterText) {
      let filterNormalized = filterText.toLowerCase();
      for (let feature of $gjScheme.features) {
        // TODO This is a very blunt free-form text search, of any property.
        if (
          JSON.stringify(feature.properties)
            .toLowerCase()
            .includes(filterNormalized)
        ) {
          showSchemes.add(feature.properties.scheme_reference);
        }
      }
    } else {
      for (let scheme of schemes) {
        showSchemes.add(scheme.scheme_reference);
      }
    }

    // Hide things on the map
    gjScheme.update((gj) => {
      if (!gj) {
        return null;
      }
      for (let feature of gj.features) {
        if (showSchemes.has(feature.properties.scheme_reference)) {
          delete feature.properties.hide_while_editing;
        } else {
          feature.properties.hide_while_editing = true;
        }
      }
      return gj;
    });

    // Recalculate stats
    counts = { area: 0, route: 0, crossing: 0, other: 0 };
    for (let feature of $gjScheme?.features) {
      if (showSchemes.has(feature.properties.scheme_reference)) {
        counts[feature.properties.intervention_type]++;
      }
    }

    // Make Svelte see the update
    showSchemes = showSchemes;
  }

  function loadFile(text: string) {
    try {
      let gj = JSON.parse(text);
      gjScheme.set(gj);
      addSchemeToSidebar(gj);

      $map?.fitBounds(bbox(gj), { padding: 20, animate: false });
    } catch (err) {
      errorMessage = `Couldn't load schemes from a file: ${err}`;
    }
  }

  function addSchemeToSidebar(gj: GeoJSON) {
    let byScheme = {};

    // Assume the input has a top-level dictionary keyed by scheme_reference
    for (let [scheme_reference, scheme] of Object.entries(gj.schemes)) {
      byScheme[scheme_reference] = {
        scheme_reference,
        num_features: 0,
        ...scheme,
      };
    }

    for (let feature of gj.features) {
      byScheme[feature.properties.scheme_reference].num_features++;
    }

    schemes = Object.values(byScheme);
  }

  function tooltip(props: { [name: string]: any }): string {
    // TODO Move into a Svelte component, so we don't have to awkwardly build up HTML like this
    var html = `<table>`;
    for (let [key, value] of Object.entries(props)) {
      html += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }
    html += `</table>`;
    return html;
  }

  function showScheme(scheme: Scheme) {
    // TODO Highlight on the map? Or fade everything else?
    let gj = {
      type: "FeatureCollection",
      features: $gjScheme.features.filter(
        (f) => f.properties.scheme_reference == scheme.scheme_reference
      ),
    };
    $map?.fitBounds(bbox(gj), { padding: 20, animate: false });
  }

  function editScheme(scheme: Scheme) {
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

<Layout>
  <div slot="sidebar" class="govuk-prose">
    <SecondaryButton on:click={() => window.open("index.html")}>
      Home</SecondaryButton
    >
    <div style="display: flex; justify-content: space-between">
      <h1>Browse schemes</h1>
      <ZoomOutMap boundaryGeojson={$gjScheme} />
    </div>
    {#if errorMessage}
      <ErrorMessage {errorMessage} />
    {/if}
    <FileInput label="Load from GeoJSON" id="load-geojson" {loadFile} />

    <br />

    <FormElement label="Filter by any field" id="filterText">
      <input
        type="text"
        class="govuk-input govuk-input--width-10"
        id="filterText"
        bind:value={filterText}
      />
      <SecondaryButton on:click={() => (filterText = "")}>Clear</SecondaryButton
      >
    </FormElement>

    <p>
      Showing {showSchemes.size} schemes ({counts.route} routes, {counts.area} areas,
      {counts.crossing} crossings, {counts.other} other)
    </p>

    <ul>
      {#each schemes as scheme}
        {#if showSchemes.has(scheme.scheme_reference)}
          <CollapsibleCard
            label={`${scheme.scheme_reference}: ${scheme.num_features} features`}
          >
            <p>Authority or region: {scheme.authority_or_region}</p>
            <p>Capital scheme ID: {scheme.capital_scheme_id}</p>
            <p>Funding programme: {scheme.funding_programme}</p>
            <div class="govuk-button-group">
              <SecondaryButton on:click={() => showScheme(scheme)}
                >Show on map</SecondaryButton
              >
              <SecondaryButton on:click={() => editScheme(scheme)}
                >Edit scheme</SecondaryButton
              >
            </div>
          </CollapsibleCard>
        {/if}
      {/each}
    </ul>
  </div>
  <div slot="main">
    <Map {style}>
      <InterventionLayer {schema} />
      <BaselayerSwitcher {style} />
      <Legend {schema} />
      <MapTooltips
        layers={[
          "interventions-points",
          "interventions-lines",
          "interventions-polygons",
        ]}
        contents={tooltip}
      />
    </Map>
  </div>
</Layout>
