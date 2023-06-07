<script lang="ts">
  // @ts-nocheck
  // TODO After figuring out the features of this page, work on the errors
  // here. Need to decide how much we use gjScheme, and what new feature-level
  // properties to expect.
  import { onDestroy } from "svelte";
  import type { GeoJSON } from "geojson";
  import Map from "../lib/Map.svelte";
  import Layout from "../lib/common/Layout.svelte";
  import FileInput from "../lib/common/FileInput.svelte";
  import InterventionLayer from "../lib/draw/InterventionLayer.svelte";
  import { map, gjScheme } from "../stores";
  import MapTooltips from "../lib/common/MapTooltips.svelte";
  import CollapsibleCard from "../lib/common/CollapsibleCard.svelte";
  import BaselayerSwitcher from "../lib/BaselayerSwitcher.svelte";
  import Legend from "../lib/Legend.svelte";
  import ZoomOutMap from "../lib/ZoomOutMap.svelte";
  import { bbox } from "../maplibre_helpers";

  const params = new URLSearchParams(window.location.search);
  let style: string = params.get("style") || "streets";
  const schema = "v1";

  interface Scheme {
    scheme_reference: string;
    authority_or_region: string;
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
      window.alert(`Couldn't load schemes from a file: ${err}`);
    }
  }

  function addSchemeToSidebar(gj: GeoJSON) {
    let byScheme = {};

    for (let feature of gj.features) {
      let p = feature.properties;
      byScheme[p.scheme_reference] ||= {
        scheme_reference: p.scheme_reference,
        authority_or_region: p.authority_or_region,
        num_features: 0,
      };
      byScheme[p.scheme_reference].num_features++;
    }

    schemes = Object.values(byScheme);
  }

  function tooltip(props: { [name: string]: any }): string {
    return JSON.stringify(props, null, "  ");
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
  <div slot="sidebar">
    <button type="button" on:click={() => window.open("index.html")}>
      Home</button
    >
    <h1>
      Browse schemes
      <ZoomOutMap boundaryGeojson={$gjScheme} />
    </h1>
    <FileInput label="Load from GeoJSON" uniqueId="load_geojson" {loadFile} />

    <br />
    <br />

    <div>
      <label>
        Filter by any field: <br />
        <input type="text" bind:value={filterText} />
      </label>
      <button type="button" on:click={() => (filterText = "")}>Clear</button>
    </div>

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
            <ul>
              <li>Authority or region: {scheme.authority_or_region}</li>
              <li>
                <button type="button" on:click={() => showScheme(scheme)}
                  >Show on map</button
                >
              </li>
              <li>
                <button type="button" on:click={() => editScheme(scheme)}
                  >Edit scheme</button
                >
              </li>
            </ul>
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
